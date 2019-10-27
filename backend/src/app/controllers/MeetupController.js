import { isBefore, parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import * as Yup from 'yup';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const { id } = req.params;

    const meetup = await Meetup.findOne({
      where: { id },
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
    });

    return res.json(meetup);
  }

  async list(req, res) {
    const schema = Yup.object().shape({
      page: Yup.string(),
      date: Yup.date(),
      own: Yup.boolean(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const { page = 1, date, own = false } = req.query;

    // Condition to return just own meetups
    let userCondition;
    if (own) {
      userCondition = {
        [Op.eq]: req.userId,
      };
    } else {
      userCondition = {
        [Op.ne]: req.userId,
      };
    }

    // Condition to return meetups within the especified date
    let dateCondition;
    if (!date) {
      dateCondition = {
        [Op.gte]: startOfDay(new Date()),
      };
    } else {
      dateCondition = {
        [Op.between]: [startOfDay(parseISO(date)), endOfDay(parseISO(date))],
      };
    }

    const meetups = await Meetup.findAll({
      where: {
        user_id: userCondition,
        date: dateCondition,
      },
      order: ['date'],
      limit: 10,
      offset: (page - 1) * 10,
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
    });

    return res.json(meetups);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      image_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const meetup = await Meetup.findByPk(req.params.id);

    if (!meetup) {
      return res.status(400).json({
        error: 'This meetup does not exists!',
      });
    }

    if (meetup.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to update this meetup!",
      });
    }

    const meetupUpdated = await meetup.update(req.body);

    return res.json(meetupUpdated);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      image_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title, description, location, date, image_id } = req.body;

    if (isBefore(parseISO(date), new Date())) {
      return res.status(400).json({ error: 'You cannot create past meetup' });
    }

    const meetup = await Meetup.create({
      user_id: req.userId,
      title,
      description,
      location,
      date,
      image_id,
    });

    return res.json(meetup);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const meetup = await Meetup.findByPk(req.params.id);

    if (!meetup) {
      return res.status(400).json({
        error: 'This meetup does not exists!',
      });
    }

    if (meetup.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to cancel this meetup!",
      });
    }

    await meetup.destroy();

    return res.json({ message: 'Meetup canceled!' });
  }
}

export default new MeetupController();
