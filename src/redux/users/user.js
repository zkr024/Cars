import ApiServices from '../shared/apiServices';

//  actions
const AUTHENTICATE_USER = 'cars/users/AUTHENTICATE_USER';
const CREATE_USER = 'cars/users/CREATE_USER';

//  reducers
export default function users(state = [], action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action;
    case CREATE_USER:
      return action.userInfo;
    default:
      return state;
  }
}

//  action creators

export const loginUser = (email, password) => (dispatch) => {
  const data = { email: `${email}`, password: `${password}` };
  const inputData = JSON.stringify(data);
  return ApiServices.authenticateUser(inputData).then (

    (data) => {
      dispatch({
        type: AUTHENTICATE_USER,
        payload: data,
      })
      return Promise.resolve();
    }
  )
}


export const loginUser2 = (email, password) => async (dispatch) => {
  // try {
  const data = { email: `${email}`, password: `${password}` };
  const inputData = JSON.stringify(data);
  const res =await ApiServices.authenticateUser(inputData);
  // console.log(res)
  if (res) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }

  dispatch({
    type: AUTHENTICATE_USER,
    payload: res.data,
  });
  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
};
