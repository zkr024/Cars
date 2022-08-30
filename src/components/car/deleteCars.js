/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadInfo } from '../../redux/cars/frontPage';
import deleteCar from '../../redux/cars/deleteCars';

import '../../assets/front.css';

const DeleteCar = () => {
  const { userId } = useParams();
  const cars = useSelector((state) => state.list);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(loadInfo(userId)); }, []);

  return (
    <div className="page-position">
      <div className="list-container">
        <h1>Remove cars from your list</h1>
        <div className="cards_container">
          { cars.length === 0
            ? (
              <img
                src={require('../../assets/gift/car.gif')}
                alt="car gift"
                className="car_gif"
              />
            )
            : (
              cars.data.map((value) => (
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
                    <form
                      onSubmit={() => deleteCar(userId, value.id)}
                    >
                      <button
                        type="submit"
                        className="btn-delete"
                      >
                        Delete
                      </button>
                    </form>
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
