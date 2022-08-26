import axios from 'axios';

const axiosBasic = () => axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {
    'Content-type': 'application/json',
  },
});

const axiosJWT = () => axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
  },
});

export { axiosBasic, axiosJWT };
