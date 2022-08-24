import { axiosBasic, axiosJWT } from './apiConnection';

const authenticateUser = (data) => axiosBasic(data).post('/authenticate');
const createUser = (data) => axiosBasic(data).post('/users');
const getUsers = (token, data) => axiosJWT(token, data).get('/users');
const ApiServices = {
  authenticateUser,
  createUser,
  getUsers,
};

export default ApiServices;
