/* eslint-disable no-case-declarations */
import axios from 'axios';
import accessToken from './accessToken';

const MY_CARS = 'cars/cars/MY_CARS';
const DELETE_CAR = 'cars/cars/DELETE_CAR';

const api = 'http://localhost:3000/users/';

const myCarsReducer = (state = [], action) => {
  switch (action.type) {
    case MY_CARS:
      return action.payload;
    case DELETE_CAR:
      const newState = state.data.filter((value) => value.id !== action.payload);
      return newState;
    default:
      return state;
  }
};

const loadInfo = (id) => async (dispatch) => {
  const res = await axios.get(`${api}${id}/selections`, {
    headers: { Authorization: accessToken() },
  });
  dispatch({
    type: MY_CARS,
    payload: res,
  });
};

const removeCar = (userId, id) => async (dispatch) => {
  await axios.delete(`${api}${userId}/selections/${id}`, {
    headers: { Authorization: accessToken() },
  });
  dispatch({
    type: DELETE_CAR,
    payload: id,
  });
};

export default myCarsReducer;
export { loadInfo, removeCar };
