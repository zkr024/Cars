import axios from 'axios';
import accessToken from './accessToken';

const ALL_CARS = 'cars/cars/ALL_CARS';

const api = 'http://localhost:3000/users/';

const allCarsReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_CARS:
      return action.payload;
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

export default allCarsReducer;
export { allCars };
