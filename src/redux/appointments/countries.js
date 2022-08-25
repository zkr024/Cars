import axios from 'axios';

const COUNTRIES = 'country/country/COUNTRIES';

const api = 'http://localhost:3000/countries';

const allCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

const allCountries = () => async (dispatch) => {
  const res = await axios.get(api);
  dispatch({
    type: COUNTRIES,
    payload: res,
  });
};

export default allCountriesReducer;
export { allCountries };
