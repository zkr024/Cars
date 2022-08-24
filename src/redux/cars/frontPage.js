import axios from 'axios';

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
  const res = await axios.get(`${api}${id}/selections`);
  dispatch({
    type: MY_CARS,
    payload: res,
  });
};

export default myCarsReducer;
export { loadInfo };
