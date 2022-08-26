/* eslint-disable no-console */
import axios from 'axios';
import accessToken from './accessToken';

const MY_CARS = 'cars/cars/MY_CARS';

const api = 'http://localhost:3000/users/';

const myCarsReducer = (state = [], action) => {
  switch (action.type) {
    case MY_CARS:
      return action.payload;
    default:
      return state;
  }
};

const loadInfo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${api}${id}/selections`, {
      headers: { Authorization: accessToken() },
    });
    dispatch({
      type: MY_CARS,
      payload: res,
    });
  } catch (error) {
    console.log('error:');
    console.log(error.message);
  }
};

export default myCarsReducer;
export { loadInfo };
