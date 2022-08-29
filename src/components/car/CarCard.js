/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import accessToken from '../../redux/cars/accessToken';

const CarCard = (props) => {
  const {
    id, model, photo,
  } = props;

  const { userId } = useParams();

  const [object, setObject] = useState({});

  const newCarToList = (e) => {
    const newCar = {
      car_id: parseInt(e.target.id, 10),
      user_id: parseInt(userId, 10),
    };
    setObject(newCar);
  };

  const newCar = async () => {
    await axios.post(`http://localhost:3000/users/${userId}/selections`, object, {
      headers: { Authorization: accessToken() },
    });
  };

  return (
    <form
      onSubmit={newCar}
    >
      <div key={id} className="carCard">
        <div className="carImageHolder">
          <img
            src={require(`../../assets/images/${photo}`)}
            alt="cars from png site"
            className="cardImage"
          />
        </div>
        <div className="carData">
          <div>{ model }</div>
          <button
            className="addCar-btn"
            type="submit"
            onClick={newCarToList}
            id={id}
          >
            Add Car
          </button>
        </div>
      </div>
    </form>
  );
};

CarCard.propTypes = {
  model: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CarCard;
