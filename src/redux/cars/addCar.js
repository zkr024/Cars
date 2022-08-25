import axios from 'axios';

const api = 'http://localhost:3000/users/';

const addCar = (id, obj) => async () => {
  console.log('here');
  try {
    const res = await axios.post(`${api}${id}/selections`, obj);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { addCar };
