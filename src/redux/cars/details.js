import axios from 'axios';

const DETAILS = 'cars/cars/DETAILS';

const api = 'http://localhost:3000/cars/';

const detailReducer = (state = [], action) => {
  switch (action.type) {
    case DETAILS:
      return action.payload;
    default:
      return state;
  }
};

const getDetails = (id) => async (dispatch) => {
  const res = await axios.get(`${api}${id}`);
  dispatch({
    type: DETAILS,
    payload: res,
  });
};

export default detailReducer;
export { getDetails };
