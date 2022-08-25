import axios from 'axios';

const CITIES = 'country/country/CITIES';

const api = 'http://localhost:3000/cities/';

const allCitiesReducer = (state = [], action) => {
  switch (action.type) {
    case CITIES:
      return action.payload;
    default:
      return state;
  }
};

const allCities = (countryId) => async (dispatch) => {
  const res = await axios.get(`${api}${countryId}`);
  dispatch({
    type: CITIES,
    payload: res,
  });
};

export default allCitiesReducer;
export { allCities };
