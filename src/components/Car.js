/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

import '../assets/car.css';

const Car = (props) => {
  const {
    id, name, description, color, photo,
  } = props;

  return (
    <div key={id} className="carCard">
      <div className="carImageHolder">
        <img
          // eslint-disable-next-line import/no-dynamic-require, global-require
          src={require(`../assets/images/${photo}`)}
          alt="cars from png site"
          className="cardImage"
        />
      </div>
      <div className="carData">
        <div>{ name }</div>
        <div>{ color }</div>
        <div>{ description }</div>
      </div>
    </div>
  );
};

Car.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Car;
