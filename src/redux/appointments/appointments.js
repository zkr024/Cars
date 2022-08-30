import axios from 'axios';
import accessToken from '../cars/accessToken';

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
  const appointmentUrl = `${api}${userId}/appointments`;
  try {
    const appointmentInfo = {
      user_id: userId,
      car_id: carId,
      seller_id: sellerId,
      city_id: cityId,
      duration,
      branch,
      date_for: dateFor,
    };
    const response = await fetch(appointmentUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken()}`,
      },
      body: JSON.stringify(appointmentInfo),
    });
    dispatch({
      type: CREATE_APPOINTMENT,
      payload: await response.json(),
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const allAppointments = (userId) => async (dispatch) => {
  if (Loading) return;
  setTimeout(async () => {
    const response = await axios.get(`${api}${userId}/appointments`, { headers: { Authorization: accessToken() } });
    dispatch(getAppointmentAPI(response.data));
  }, 1000);
  Loading = true;
};

const allAppointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENTS:
      return action.payload;
    case CREATE_APPOINTMENT:
      return action.payload;
    default:
      return state;
  }
};

export default allAppointmentsReducer;
