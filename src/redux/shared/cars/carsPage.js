/* eslint-disable linebreak-style */
import axios from 'axios';

const CARS = 'cars/cars/CARS';

const api = 'http://localhost:3000/users/';

const carsReducer = (state = [], action) => {
  switch (action.type) {
    case CARS:
      return action.payload;
    default:
      return state;
  }
};

const loadInfo = (id) => async (dispatch) => {
  const res = await axios.get(`${api}${id}/selections`);
  dispatch({
    type: CARS,
    payload: res,
  });
};

export default carsReducer;
export { loadInfo };
