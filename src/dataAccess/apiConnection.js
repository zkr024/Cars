import axios from 'axios';
import accessToken from '../redux/cars/accessToken';

const axiosBasic = () => axios.create({
  baseURL: 'https://cars-api-bk.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});

const axiosJWT = () => axios.create({
  baseURL: 'https://cars-api-bk.herokuapp.com',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${accessToken()}`,
  },
});

export { axiosBasic, axiosJWT };
