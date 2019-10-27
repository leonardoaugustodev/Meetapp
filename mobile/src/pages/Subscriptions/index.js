import React, {useEffect, useState} from 'react';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import api from '~/services/api';
import Background from '~/components/Background';
import Subscription from '~/components/Subscription';
import {Container, Title, List} from './styles';

function Subscriptions({isFocused}) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadMeetups() {
    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`subscriptions/${id}`);

    setSubscriptions(
      subscriptions.map(subscription =>
        subscription.id === id
          ? {
              ...subscription,
              canceled: true,
            }
          : subscription,
      ),
    );
  }

  return (
    <Background>
      <Container>
        <Title />

        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) =>
            !item.canceled && (
              <Subscription
                onCancel={() => handleCancel(item.id)}
                data={item}
              />
            )
          }
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);

Subscriptions.propTypes = {
  isFocused: PropTypes.bool,
};

Subscriptions.defaultProps = {
  isFocused: false,
};
