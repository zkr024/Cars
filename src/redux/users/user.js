/* eslint-disable camelcase */
import ApiServices from '../../dataAccess/apiServices';

//  actions
const AUTHENTICATE_USER = 'cars/users/AUTHENTICATE_USER';
const CREATE_USER = 'cars/users/CREATE_USER';
const GET_USER = 'cars/users/GET_USER';

//  reducers
export default function users(state = [], action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action.payload;
    case CREATE_USER:
      return action.payload;
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const data = { email: `${email}`, password: `${password}` };
    const userInfo = JSON.stringify(data);
    const res = await ApiServices.authenticateUser(userInfo);
    if (res.data) {
      localStorage.setItem('token', JSON.stringify(res.data.auth_token));
    }
    dispatch({
      type: AUTHENTICATE_USER,
      payload: res.data,
    });
    return true;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getUser = (email) => async (dispatch) => {
  try {
    const data = { email: `${email}` };
    const params = JSON.stringify(data);
    const res = await ApiServices.getUserByEmail(params);
    if (res.data) {
      localStorage.setItem('user_id', JSON.stringify(res.data.id));
      localStorage.setItem('user_name', JSON.stringify(res.data.name));
    }
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createUser = (name, email, password,
  password_confirmation, age, phone) => async (dispatch) => {
  try {
    const userInfo = {
      name,
      email,
      password,
      password_confirmation,
      age,
      phone,
    };
    const params = JSON.stringify(userInfo);
    const response = await ApiServices.createUser(params);
    dispatch({
      type: CREATE_USER,
      payload: response.data,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
