import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allAppointments } from '../../redux/appointments/appointments';
import AppointmentsListItem from './AppointmentListItem';

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const appointments = useSelector((state) => state.appointments);
  console.log(appointments);
  useEffect(() => {
    dispatch(allAppointments(userId));
  }, [dispatch]);

  const appointmentsList = (data) => {
    const list = (
      <AppointmentsListItem
        key={data.id}
        id={data.id}
        userId={data.user_id}
        carId={data.car_id}
        sellerId={data.seller_id}
        cityId={data.city_id}
        duration={data.duration}
        branch={data.branch}
        dateFor={data.date_for}
      />
    );
    return list;
  };

  return (
    <div className="page-position">
      <h1> Appointments List</h1>
      <div>
        { appointments.length === 0
          ? (
            <h2>Loading appointments list...</h2>
          )
          : (
            <ul>{appointments.map((value) => appointmentsList(value))}</ul>
          )}
      </div>
    </div>
  );
};

export default AppointmentsList;
