/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

// eslint-disable-next-line import/no-named-as-default
import Car from './Car';
import { loadInfo } from '../redux/shared/cars/carsPage';

import '../assets/cars.css';

const carList = (data) => {
  const value = data.car;
  const list = (
    <Car
      id={value.id}
      name={value.model}
      description={value.description}
      color={value.color}
      key={value.id}
      photo={value.photo}
    />
  );
  return list;
};

const CarsPage = () => {
  const { userId } = useParams();

  const cars = useSelector((state) => state.car);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(loadInfo(userId)); }, []);

  const leftScroll = () => {
    const left = document.querySelector('.scroll-images');
    left.scrollBy(-350, 0);
  };

  const rightScroll = () => {
    const right = document.querySelector('.scroll-images');
    right.scrollBy(350, 0);
  };

  return (
    <>
      <h1>My Car list</h1>
      <div className="mainContainer">
        <AiOutlineDoubleLeft
          className="left"
          onClick={leftScroll}
        />
        <div className="carsContainer">
          <div className="cover">
            <div className="scroll-images">
              { cars.length === 0
                ? (
                  <img
                    // eslint-disable-next-line global-require
                    src={require('../assets/gift/car.gif')}
                    alt="car gift"
                    className="car_gif"
                  />
                )
                : (
                  cars.data.map((value) => carList(value))
                )}
            </div>
          </div>
        </div>
        <AiOutlineDoubleRight
          className="right"
          onClick={rightScroll}
        />
      </div>
    </>
  );
};

export default CarsPage;
