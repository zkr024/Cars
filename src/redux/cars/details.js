import axios from 'axios';
import accessToken from './accessToken';

const DETAILS = 'cars/cars/DETAILS';

const api = 'https://cars-api-bk.herokuapp.com/users/';

const detailReducer = (state = [], action) => {
  switch (action.type) {
    case DETAILS:
      return action.payload;
    default:
      return state;
  }
};

const getDetails = (id, carId) => async (dispatch) => {
  const res = await axios.get(`${api}${id}/cars/${carId}`, {
    headers: { Authorization: accessToken() },
  });
  dispatch({
    type: DETAILS,
    payload: res,
  });
};

export default detailReducer;
export { getDetails };
