import axios from 'axios';
import accessToken from '../cars/accessToken';

const CITIES = 'city/city/CITIES';

const api = 'https://cars-api-bk.herokuapp.com/countries/';

const initialState = [];

export function getCitiesAPI(cities) {
  const APICityData = cities.map((city) => ({
    id: city.id,
    name: city.name,
    country_id: city.country_id,
  }));
  return {
    type: CITIES,
    payload: APICityData,
  };
}

export const allCities = (countryId) => async (dispatch) => {
  const response = await axios.get(`${api}${countryId}/cities`, { headers: { Authorization: accessToken() } });
  dispatch(getCitiesAPI(response.data));
};

const allCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CITIES:
      return action.payload;
    default:
      return state;
  }
};

export default allCitiesReducer;
