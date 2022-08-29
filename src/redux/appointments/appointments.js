import axios from 'axios';
import ApiServices from '../../dataAccess/apiServices';

const APPOINTMENTS = 'appointment/appointment/APPOINTMENTS';
const CREATE_APPOINTMENT = 'appointment/appointment/CREATE_APPOINTMENT';

const api = 'http://localhost:3000/users/';

const initialState = [];
let Loading = false;

export function getAppointmentAPI(appointments) {
  const APIAppointmentData = appointments.map((appointment) => ({
    id: appointment.id,
    user_id: appointment.user_id,
    car_id: appointment.car_id,
    seller_id: appointment.seller_id,
    city_id: appointment.city_id,
    duration: appointment.duration,
    branch: appointment.branch,
    date_for: appointment.date_for,
  }));
  return {
    type: APPOINTMENTS,
    payload: APIAppointmentData,
  };
}

export const postAppointment = (userId, carId, sellerId, cityId,
  dateFor, duration, branch) => async (dispatch) => {
  try {
    const appointmentInfo = {
      appointment: {
        user_id: userId,
        car_id: carId,
        seller_id: sellerId,
        city_id: cityId,
        duration,
        branch,
        date_for: dateFor,
      },
    };
    // appointmentInfo.date_for = '2022-12-20T12:00:00.000Z';

    const appointment = JSON.stringify(appointmentInfo);
    console.log(appointment);
    // const response = await axios.post(`${api}${userId}/appointments`, appointment);
    const response = await ApiServices.postAppointment(appointment);
    dispatch({
      type: CREATE_APPOINTMENT,
      payload: response.data,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const allAppointments = (userId) => async (dispatch) => {
  if (Loading) return;
  setTimeout(async () => {
    const response = await axios.get(`${api}${userId}`);
    dispatch(getAppointmentAPI(response.data));
  }, 1000);
  Loading = true;
};

const allAppointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENTS:
      return action.payload;
    case CREATE_APPOINTMENT:
      return action;
    default:
      return state;
  }
};

export default allAppointmentsReducer;

// console.log(userId);
// console.log(carId);
// console.log(sellerId);
// console.log(cityId);
// console.log(dateFor);
// console.log(duration);
// console.log(branch);
