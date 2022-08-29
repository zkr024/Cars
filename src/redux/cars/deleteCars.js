import axios from 'axios';
import accessToken from './accessToken';

const api = 'http://localhost:3000/users/';

const deleteCar = async (userId, id) => {
  await axios.delete(`${api}${userId}/selections/${id}`, {
    headers: { Authorization: accessToken() },
  });
};

export default deleteCar;
