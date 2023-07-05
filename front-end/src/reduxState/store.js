import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import searchReducer from './State';
import userTokenReducer from './userToken';

const reducers = combineReducers({
  userToken: userTokenReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    search: searchReducer,
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
