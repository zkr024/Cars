/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { loadInfo } from '../../../redux/cars/frontPage';

import '../../../assets/front.css';

const FrontPage = () => {
  const { userId } = useParams();
  const cars = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(loadInfo(userId)); }, []);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="page-position">
      <div className="list-container">
        <h1>My Car list</h1>
        <div className="list-data">
          <Carousel
            variant="dark"
            activeIndex={index}
            onSelect={handleSelect}
            className="slide"
          >
            { cars.length === 0
              ? (
                <img
                  src={require('../../../assets/gift/car.gif')}
                  alt="car gift"
                  className="car_gif"
                />
              )
              : (
                cars.data.map((value) => (
                  <Carousel.Item key={value.car.id} className="car">
                    <Link to={`/users/${userId}/cars/${value.car.id}`}>
                      <div className="cardHolder">
                        <div className="imgHolder">
                          <img
                            className="d-block w-100"
                            src={require(`../../../assets/images/${value.car.photo}`)}
                            alt="cars from png site"
                          />
                        </div>
                      </div>
                    </Link>
                    <Carousel.Caption>
                      <h3 className="model">{ value.car.model }</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
