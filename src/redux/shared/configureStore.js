/* eslint-disable linebreak-style */
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import myCarsReducer from '../cars/frontPage';
import detailReducer from '../cars/details';

const reducers = combineReducers({
  list: myCarsReducer,
  detail: detailReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;

export { reducers };
