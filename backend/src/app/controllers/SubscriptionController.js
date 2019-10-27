import { Op } from 'sequelize';
import { isBefore, isAfter, startOfHour, endOfHour } from 'date-fns';
import Queue from '../lib/Queue';
import User from '../models/User';
import Meetup from '../models/Meetup';
import File from '../models/File';

import Subscription from '../models/Subscription';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      order: [['meetup', 'date', 'ASC']],
      include: [
        {
          model: Meetup,
          as: 'meetup',
          include: [
            {
              model: User,
              as: 'user',
            },
            {
              model: File,
              as: 'image',
            },
          ],
        },
      ],
    });

    const available = subscriptions.filter(meet => {
      return isAfter(meet.meetup.date, new Date());
    });
    return res.json(available);
  }

  async store(req, res) {
    const meetup = await Meetup.findByPk(req.body.meetup_id, {
      include: [{ model: User, as: 'user', attributes: ['name', 'email'] }],
    });

    const loggerUser = await User.findByPk(req.userId);

    // Check if meetup exists
    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found!' });
    }

    // Check if the meetup is owned for user
    if (meetup.user_id === req.userId) {
      return res
        .status(401)
        .json({ error: 'You cannot subscribe in your meetup!' });
    }

    // Check if meetup is already done
    if (isBefore(meetup.date, new Date())) {
      return res
        .status(400)
        .json({ error: 'You cannot subscribe in past events!' });
    }

    // Check if user tries to subscribe into two meetup with the same time
    const checkSubscription = await Subscription.findOne({
      where: {
        user_id: req.userId,
        meetup_id: req.body.meetup_id,
      },
    });

    if (checkSubscription) {
      return res.status(401).json({
        error: 'You cannot subscribe more than once in this meetup!',
      });
    }

    const checkSameDate = await Subscription.findOne({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          where: {
            date: {
              [Op.between]: [startOfHour(meetup.date), endOfHour(meetup.date)],
            },
          },
        },
      ],
    });

    if (checkSameDate) {
      return res.status(401).json({
        error: 'You already have a meetup in this time',
      });
    }
    // Check if user tries to subscribe more than once

    const subscription = await Subscription.create(
      {
        user_id: req.userId,
        meetup_id: req.body.meetup_id,
      },
      { include: [{ model: Meetup, as: 'meetup' }] }
    );

    await Queue.add(SubscriptionMail.key, {
      email: meetup.user.email,
      name: loggerUser.name,
    });

    return res.json(subscription);
  }

  async delete(req, res) {
    const subscription = await Subscription.findByPk(req.params.id);

    if (!subscription) {
      return res.status(400).json({
        error: 'This subscription does not exists!',
      });
    }

    if (subscription.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to cancel this subscription!",
      });
    }

    await subscription.destroy();

    return res.json({ message: 'subscription canceled!' });
  }
}

export default new SubscriptionController();
