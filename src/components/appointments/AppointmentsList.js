/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { allAppointments } from '../../redux/appointments/appointments';
import AppointmentsListItem from './AppointmentListItem';
import '../../assets/appointment.css';

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const appointments = useSelector((state) => state.appointments);
  useEffect(() => {
    dispatch(allAppointments(userId));
  }, [dispatch]);

  const appointmentsList = (data) => {
    const list = (
      <AppointmentsListItem
        key={data.id}
        id={data.id}
        userName={data.user.name}
        carModel={data.car.model}
        sellerName={data.seller.name}
        cityName={data.city.name}
        duration={data.duration}
        branch={data.branch}
        dateFor={data.date_for}
      />
    );
    return list;
  };

  const leftScroll = () => {
    const left = document.getElementById('scrollData');
    left.scrollBy(-100, 0);
  };

  const rightScroll = () => {
    const right = document.getElementById('scrollData');
    right.scrollBy(100, 0);
  };

  return (
    <div className="page-appointment">
      <h1> Appointments List</h1>
      <div className="movement">
        <button
          type="button"
          onClick={leftScroll}
          className="scroll-btn"
        >
          <FaAngleDoubleLeft />
        </button>
        <div className="main-table-container" id="scrollData">
          <div className="app-table-title">
            <h4>User Name</h4>
            <h4>Seller</h4>
            <h4>Car Model</h4>
            <h4>Branch</h4>
            <h4>Duration</h4>
            <h4>City</h4>
            <h4>Date</h4>
          </div>
          { appointments.length === 0
            ? (
              <div className="carImageHolder">
                <img
                  src={require('../../assets/gift/car.gif')}
                  alt="car gift"
                  className="car_gif"
                />
              </div>
            )
            : (
              <div className="table-content">{appointments.map((value) => appointmentsList(value))}</div>
            )}
        </div>
        <button
          type="button"
          onClick={rightScroll}
          className="scroll-btn"
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default AppointmentsList;
