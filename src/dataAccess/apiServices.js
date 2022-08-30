import { axiosBasic, axiosJWT } from './apiConnection';

const authenticateUser = (data) => axiosBasic().post('/authenticate', data);
const createUser = (data) => axiosBasic().post('/users', data);
const getUserByEmail = (data) => axiosBasic().post('/useremail', data);
const getUsers = (token, data) => axiosJWT(token).get('/users', data);

const postAppointment = (token, data) => axiosJWT(token).post('/users/1/appointments', data);

const ApiServices = {
  authenticateUser,
  createUser,
  getUsers,
  getUserByEmail,
  postAppointment,
};

export default ApiServices;
