import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allAppointments } from '../../redux/appointments/appointments';
import AppointmentsListItem from './AppointmentListItem';

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const appointments = useSelector((state) => state.appointments);
  useEffect(() => {
    dispatch(allAppointments(userId));
  }, [dispatch]);

  return (
    <div className="page-position">
      <h1> Appointments List</h1>
      <div>
        { appointments.length === 0
          ? (
            <h2>Loading appointments list...</h2>
          )
          : (
            <ul>
              {appointments.map((appointment) => (
                <AppointmentsListItem
                  key={appointment.id}
                  appointments={appointments}
                />
              ))}
            </ul>
          )}
      </div>
    </div>
  );
};

export default AppointmentsList;
