import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import api from '~/services/api';
import {Container} from './styles';

export default function Confirm({navigation}) {
  const meetup = navigation.getParam('item');

  async function handleSubmit() {
    try {
      const response = await api.post('subscriptions', {
        meetup_id: meetup.id,
      });

      Alert.alert('Inscrição realizada com sucesso!');
      navigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert(
        'Por favor, verifique se você já não está inscrito neste meetup!',
      );
      navigation.navigate('Subscriptions');
    }
  }

  return (
    <Background>
      <Container>
        <Meetup data={meetup} onSubscribe={handleSubmit} confirm />
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirme a inscrição',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

Confirm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};
