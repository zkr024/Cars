/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allCars } from '../../redux/cars/allCars';
import CarCard from './CarCard';

import '../../assets/allCars.css';

const carList = (data) => {
  const list = (
    <CarCard
      id={data.id}
      model={data.model}
      key={data.id}
      photo={data.photo}
    />
  );
  return list;
};

const AllCars = () => {
  const { userId } = useParams();

  const cars = useSelector((state) => state.car);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(allCars(userId)); }, []);

  return (
    <div className="user-container" data-testid="user-a">
      <h1>Car List</h1>
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
            cars.data.map((value) => carList(value))
          )}
      </div>
    </div>
  );
};

export default AllCars;
