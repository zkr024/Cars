import { Link } from 'react-router-dom';

const Access = () => (
  <div className="user-container" data-testid="user-a">
    <Link to="/users/1">User 1</Link>
    <Link to="/users/2">User 2</Link>
    <Link to="/users/3">User 3</Link>
  </div>
);

export default Access;
