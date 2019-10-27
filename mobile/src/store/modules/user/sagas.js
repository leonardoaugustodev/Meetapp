import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {updateProfileSuccess, updateProfileFailure} from './actions';

import api from '~/services/api';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload;

    const profile = {name, email, ...(rest.oldPassword ? rest : {})};

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));

    Alert.alert('Perfil atualizado com sucesso!');
  } catch (err) {
    Alert.alert(
      'Falha na atualização! Houve um erro na atualização do perfil!',
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
