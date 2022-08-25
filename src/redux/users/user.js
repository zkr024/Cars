import ApiServices from '../../dataAccess/apiServices';

//  actions
const AUTHENTICATE_USER = 'cars/users/AUTHENTICATE_USER';
const CREATE_USER = 'cars/users/CREATE_USER';
const GET_USER = 'cars/users/GET_USER';

//  reducers
export default function users(state = [], action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action;
    case CREATE_USER:
      return action;
    case GET_USER:
      return action;
    default:
      return state;
  }
}

//  action creators

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
    // const userInfo = JSON.stringify(data);
    const params = JSON.stringify(data);
    //  new url.URLSearchParams(data);
    const res = await ApiServices.getUserByEmail(params);
    if (res.data) {
      localStorage.setItem('user_id', JSON.stringify(res.data.id));
    }
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    return true;
  } catch (err) {
    return Promise.reject(err);
  }
};
