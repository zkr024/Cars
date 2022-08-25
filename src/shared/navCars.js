import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';

// const { isAuthenticated } = this.props

function NavCars() {
  return (
    <Navbar className="nav-frame" collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">Cars</Navbar.Brand> */}
      <Container className="nav-container">
        <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/user">Users</Nav.Link>
            <Nav.Link as={Link} to="/access">Access</Nav.Link>
            <Nav.Link as={Link} to="/users/:userId">My List</Nav.Link>
            <Nav.Link as={Link} to="/users/:userId/cars">Add Car</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavCars;
