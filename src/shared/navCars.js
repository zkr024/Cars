import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const user = localStorage.getItem('user_id');
const NavCars = (props) => {
  const { classType } = props;
  return (
    <Navbar className={classType} collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">Cars</Navbar.Brand> */}
      <Container className="nav-container">
        <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/access">Access</Nav.Link>
            <Nav.Link as={Link} to={`/users/${user}/cars`}>Add Car</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavCars.propTypes = {
  classType: PropTypes.string.isRequired,
};
export default NavCars;
