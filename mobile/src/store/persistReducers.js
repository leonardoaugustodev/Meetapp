// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      timeout: 0,
      key: 'meetapp',
      storage: AsyncStorage,
      blacklist: [],
    },
    reducers,
  );
  return persistedReducer;
};
