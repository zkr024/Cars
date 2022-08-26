import axios from 'axios';

const CITIES = 'city/city/CITIES';

const api = 'http://localhost:3000/cities/';

const initialState = [];
let Loading = false;

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
  if (Loading) return;
  setTimeout(async () => {
    const response = await axios.get(`${api}${countryId}`);
    dispatch(getCitiesAPI(response));
  }, 1000);
  Loading = true;
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
