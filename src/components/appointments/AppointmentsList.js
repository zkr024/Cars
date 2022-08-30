import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allAppointments } from '../../redux/appointments/appointments';

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const appointments = useSelector((state) => state.appointments);
  console.log(appointments);
  useEffect(() => {
    dispatch(allAppointments(userId));
  }, [dispatch]);

  return (
    <div>
      <div className="user-container" data-testid="user-a">
        <h1> Appointments List</h1>
      </div>
    </div>
  );
};

export default AppointmentsList;
