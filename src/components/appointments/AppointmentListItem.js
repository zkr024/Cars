import PropTypes from 'prop-types';

function AppointmentsListItem(props) {
  const {
    id, userName, carModel, sellerName, cityName, duration, branch, dateFor,
  } = props;

  return (
    <div key={id} className="app-table-content">
      <div>{userName}</div>
      <div>{sellerName}</div>
      <div>{carModel}</div>
      <div>{branch}</div>
      <div>{duration}</div>
      <div>{cityName}</div>
      <div>{dateFor}</div>
    </div>
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
