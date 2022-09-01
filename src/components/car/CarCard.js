/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCar } from '../../redux/cars/allCars';

const CarCard = (props) => {
  const {
    id, model, photo,
  } = props;

  const { userId } = useParams();
  const dispatch = useDispatch();

  const newCarToList = async (e) => {
    const newCar = {
      car_id: parseInt(e.target.id, 10),
      user_id: parseInt(userId, 10),
    };
    dispatch(addCar(userId, newCar));
  };

  return (
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
          type="button"
          onClick={newCarToList}
          id={id}
        >
          Add Car
        </button>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  model: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CarCard;
