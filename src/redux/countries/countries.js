import axios from 'axios';

const COUNTRIES = 'country/country/COUNTRIES';

const api = 'http://localhost:3000/countries';

const initialState = [];
let Loading = false;

export function getCountryAPI(countries) {
  const APICountryData = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));
  return {
    type: COUNTRIES,
    payload: APICountryData,
  };
}

export const allCountries = () => async (dispatch) => {
  if (Loading) return;
  setTimeout(async () => {
    const response = await await axios.get(api);
    dispatch(getCountryAPI(response));
  }, 1000);
  Loading = true;
};

const allCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default allCountriesReducer;
