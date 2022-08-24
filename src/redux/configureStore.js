import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import users from './users/user';
import middleware from './middleware';

const rootReducer = combineReducers({
  users,
});
const store = configureStore({
  reducer: rootReducer,
  middleware,
});
export default store;
