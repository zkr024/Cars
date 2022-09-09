/* eslint-disable no-case-declarations */
import axios from 'axios';
import accessToken from './accessToken';

const ALL_CARS = 'cars/cars/ALL_CARS';
const ADD_CAR = 'cars/cars/ADD_CAR';

const api = 'https://cars-api-bk.herokuapp.com/users/';

const allCarsReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_CARS:
      return action.payload;
    case ADD_CAR:
      const newState = state.data.filter((value) => value.id !== action.payload);
      return newState;
    default:
      return state;
  }
};

const allCars = (id) => async (dispatch) => {
  const res = await axios.get(`${api}${id}/cars`, {
    headers: { Authorization: accessToken() },
  });
  dispatch({
    type: ALL_CARS,
    payload: res,
  });
};

const addCar = (userId, object) => async (dispatch) => {
  await axios.post(`${api}${userId}/selections`, object, {
    headers: { Authorization: accessToken() },
  });
  dispatch({
    type: ADD_CAR,
    payload: object.car_id,
  });
};

export default allCarsReducer;
export { allCars, addCar };
