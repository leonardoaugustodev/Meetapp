import { takeLatest, all, put, call } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import {
  updateMeetupSuccess,
  deleteMeetupSuccess,
  createMeetupSuccess,
} from './actions';
import history from '../../../services/history';
import api from '../../../services/api';

export function editMeetup({ payload }) {
  console.tron.log(payload);
  const { meetup } = payload;
  try {
    history.push(`/details/${meetup.id}`);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* createMeetup({ payload }) {
  console.tron.log(payload);
  try {
    const { title, description, date, location, image_id } = payload.data;

    const meetup = {
      title,
      description,
      location,
      date,
      image_id,
    };

    yield call(api.post, '/meetups', meetup);
    toast.success('Meetup criado com sucesso!');
    history.push('/dashboard');
    yield put(createMeetupSuccess());
  } catch (err) {
    toast.error('Algum erro aconteceu!');
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { id, title, description, date, location, image_id } = payload.data;

    const meetup = {
      id,
      title,
      description,
      date,
      location,
      image_id,
    };

    yield call(api.put, `/meetups/${id}`, meetup);

    toast.success('Meetup atualizado com sucesso!');
    history.push('/dashboard');
    yield put(updateMeetupSuccess());
  } catch (err) {
    toast.error('Algum erro aconteceu!');
  }
}

export function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/meetups/${id}`);

    toast.success('Meetup cancelado!');
    history.push('/dashboard');

    put(deleteMeetupSuccess);
  } catch (err) {
    toast.error('Algum erro inesperado aconteceu!');
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
]);
