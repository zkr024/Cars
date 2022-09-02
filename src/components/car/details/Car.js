/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getDetails } from '../../../redux/cars/details';
import '../../../assets/details.css';

const Car = () => {
  const { carId, userId } = useParams();

  const details = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const value = details.data;

  useEffect(() => { dispatch(getDetails(userId, carId)); }, []);

  return (
    <div className="page-position">
      <h1>Carl Details</h1>
      { details.length === 0
        ? (
          <img
            src={require('../../../assets/gift/car.gif')}
            alt="car gift"
            className="car_gif"
          />
        )
        : (
          <div className="details-container">
            <div className="ImgHolder">
              <img
                className="detailsImage"
                src={require(`../../../assets/images/${value.photo}`)}
                alt="cars from png site"
              />
            </div>
            <div className="car-details">
              <h3>{value.model}</h3>
              <h4>{value.brand}</h4>
              <h5>
                Price $
                {value.price}
                K
              </h5>
              <h5>
                color:
                {' '}
                {value.color}
              </h5>
              <p>{value.description}</p>
              <Link
                to={`/users/${userId}/cars/${carId}/appointment`}
                className="appointment-btn"
              >
                Appointment
              </Link>
            </div>
          </div>
        )}
    </div>
  );
};

export default Car;
