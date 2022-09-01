/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadInfo, removeCar } from '../../redux/cars/frontPage';

import '../../assets/front.css';

const DeleteCar = () => {
  const { userId } = useParams();
  const cars = useSelector((state) => state.list.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cars === undefined) {
      dispatch(loadInfo(userId));
    }
  });

  const remove = (id) => {
    dispatch(removeCar(userId, id));
  };

  return (
    <div className="page-position">
      <div className="list-container">
        <h1>Remove cars from your list</h1>
        <div className="cards_container">
          { cars === undefined
            ? (
              <img
                src={require('../../assets/gift/car.gif')}
                alt="car gift"
                className="car_gif"
              />
            )
            : (
              cars.map((value) => (
                <div className="carCard" key={value.car.id}>
                  <div className="carImageHolder">
                    <img
                      className="cardImage"
                      src={require(`../../assets/images/${value.car.photo}`)}
                      alt="cars from png site"
                    />
                  </div>
                  <div className="carData">
                    <div>{ value.car.model }</div>
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => remove(value.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default DeleteCar;
