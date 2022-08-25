import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import users from './users/user';
import myCarsReducer from './cars/frontPage';
import detailReducer from './cars/details';
import allCarsReducer from './cars/allCars';
import middleware from './middleware';

const rootReducer = combineReducers({
  users,
  list: myCarsReducer,
  detail: detailReducer,
  car: allCarsReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware,
});
export default store;

export { rootReducer };
