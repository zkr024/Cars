import axios from 'axios';

const APPOINTMENTS = 'appointment/appointment/APPOINTMENTS';

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

export const allAppointments = (userId) => async (dispatch) => {
  if (Loading) return;
  setTimeout(async () => {
    const response = await axios.get(`${api}${userId}`);
    dispatch(getAppointmentAPI(response));
  }, 1000);
  Loading = true;
};

const allAppointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default allAppointmentsReducer;
