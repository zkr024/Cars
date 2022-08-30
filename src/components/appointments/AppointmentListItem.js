import PropTypes from 'prop-types';

function AppointmentsListItem(props) {
  const {
    id, userId, carId, sellerId, cityId, duration, branch, dateFor,
  } = props;

  return (
    <li key={id}>
      {userId}
      {carId}
      {sellerId}
      {cityId}
      {duration}
      {branch}
      {dateFor}
    </li>
  );
}

export default AppointmentsListItem;

AppointmentsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  carId: PropTypes.number.isRequired,
  sellerId: PropTypes.number.isRequired,
  cityId: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  branch: PropTypes.string.isRequired,
  dateFor: PropTypes.string.isRequired,
};
