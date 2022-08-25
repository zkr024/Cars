import axios from 'axios';

const axiosBasic = () => axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

const axiosJWT = (token) => axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { axiosBasic, axiosJWT };
