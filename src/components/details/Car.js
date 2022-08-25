/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getDetails } from '../../redux/cars/details';

const Car = () => {
  const { carId } = useParams();

  const details = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const value = details.data;

  useEffect(() => { dispatch(getDetails(carId)); }, []);

  return (
    <div className="user-container" data-testid="user-a">
      { details.length === 0
        ? (
          <img
            src={require('../../assets/gift/car.gif')}
            alt="car gift"
            className="car_gif"
          />
        )
        : (
          <div className="ImgHolder">
            <img
              className="detailsImage"
              src={require(`../../assets/images/${value.photo}`)}
              alt="cars from png site"
            />
          </div>
        )}
      <Link to="/">Appointment</Link>
    </div>
  );
};

export default Car;
