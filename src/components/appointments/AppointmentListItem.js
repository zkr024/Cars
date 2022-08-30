import PropTypes from 'prop-types';

function AppointmentsListItem(props) {
  const {
    id, userName, carModel, sellerName, cityName, duration, branch, dateFor,
  } = props;

  return (
    <li key={id}>
      {userName}
      {carModel}
      {sellerName}
      {cityName}
      {duration}
      {branch}
      {dateFor}
    </li>
  );
}

export default AppointmentsListItem;

AppointmentsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  carModel: PropTypes.string.isRequired,
  sellerName: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  branch: PropTypes.string.isRequired,
  dateFor: PropTypes.string.isRequired,
};
