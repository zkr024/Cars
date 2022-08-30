import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import users from './users/user';
import myCarsReducer from './cars/frontPage';
import detailReducer from './cars/details';
import allCarsReducer from './cars/allCars';
import middleware from './middleware';
import allCitiesReducer from './cities/cities';
import allCountriesReducer from './countries/countries';
import allSellersReducer from './sellers/sellers';
import allAppointmentsReducer from './appointments/appointments';

const rootReducer = combineReducers({
  users,
  list: myCarsReducer,
  detail: detailReducer,
  car: allCarsReducer,
  cities: allCitiesReducer,
  countries: allCountriesReducer,
  sellers: allSellersReducer,
  appointments: allAppointmentsReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware,
});
export default store;

export { rootReducer };
