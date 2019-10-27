import {takeLatest, all, put, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {toast} from 'react-toastify';
import {updateMeetupSuccess, deleteMeetupSuccess} from './actions';
// import history from '../../../services/history';
import api from '../../../services/api';

export function editMeetup({payload}) {
  const {meetup} = payload;
  try {
    // history.push(`/details/${meetup.id}`);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* updateMeetup({payload}) {
  console.tron.log('payload', payload);
  try {
    const {id, title, description, date, location, image_id} = payload.data;

    if (id) {
      const meetup = {
        id,
        title,
        description,
        date,
        location,
        image_id,
      };

      yield call(api.put, `/meetups/${id}`, meetup);

      Alert.alert('Meetup atualizado com sucesso!');
      // history.push('/dashboard');
      put(updateMeetupSuccess());
    } else {
      const meetup = {
        title,
        description,
        location,
        date,
        image_id,
      };

      yield call(api.post, '/meetups', meetup);
      Alert.alert('Meetup criado com sucesso!');
      // history.push('/dashboard');
      put(updateMeetupSuccess());
    }
  } catch (err) {
    Alert.alert('Algum erro inesperado aconteceu!');
  }
}

export function* deleteMeetup({payload}) {
  try {
    const {id} = payload;

    yield call(api.delete, `/meetups/${id}`);

    Alert.alert('Meetup cancelado!');
    // history.push('/dashboard');

    put(deleteMeetupSuccess);
  } catch (err) {
    Alert.alert('Algum erro inesperado aconteceu!');
  }
}

export default all([
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
]);
