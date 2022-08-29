import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const user = localStorage.getItem('user_id');
const NavCars = (props) => {
  const { authenticated } = props;
  return (
    <Navbar className={(authenticated) ? 'nav-visible' : 'nav-hidden'} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Cars Logo</Navbar.Brand>
      <Container className="nav-container">
        <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
            <Nav.Link as={Link} to={`/users/${user}`}>My list</Nav.Link>
            <Nav.Link as={Link} to={`/users/${user}/cars`}>Add Car</Nav.Link>
            <Nav.Link as={Link} to={`/users/${user}/cars/delete`}>Delete Car</Nav.Link>
            {(authenticated)
              ? <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>
              : <Nav.Link as={Link} to="/">Log In</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavCars.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};
export default NavCars;
