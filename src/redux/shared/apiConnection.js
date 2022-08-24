import axios from 'axios';

const axiosBasic = (inputData) => axios.create({
  baseURL: 'http://localhost:3000',
  data: inputData,
  headers: {
    'Content-type': 'application/json',
  },
});

const axiosJWT = (token, inputData) => axios.create({
  baseURL: 'http://localhost:3000',
  data: inputData,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
  //   .then(function (response) {
  //   //handle success
  //   console.log(response);
  // })
  // .catch(function (response) {
  //   //handle error
  //   console.log(response);
  // });
export { axiosBasic, axiosJWT };
