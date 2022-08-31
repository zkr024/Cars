/* eslint-disable global-require */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/navbar.css';

const NavCars = (props) => {
  const { authenticated } = props;
  const user = localStorage.getItem('user_id');
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header className={(authenticated) ? 'nav-visible' : 'nav-hidden'}>
      <div className="top-container">
        <div className="logoImageHolder">
          <img
            src={require('../assets/images/logo/logo.png')}
            alt="logo from png site"
            className="logoImage"
          />
        </div>
        <nav ref={navRef}>
          <div className="nav-links-container">
            <button onClick={showNavBar} type="button" className="nav-display">
              <NavLink
                to={`/users/${user}/list`}
                className={({ isActive }) => (isActive ? 'enable' : 'nav-links')}
              >
                My list
              </NavLink>
            </button>
            <button onClick={showNavBar} type="button" className="nav-display">
              <NavLink
                to={`/users/${user}/cars/add`}
                className={({ isActive }) => (isActive ? 'enable' : 'nav-links')}
              >
                Add Car
              </NavLink>
            </button>
            <button onClick={showNavBar} type="button" className="nav-display">
              <NavLink
                to={`/users/${user}/cars/delete`}
                className={({ isActive }) => (isActive ? 'enable' : 'nav-links')}
              >
                Delete Car
              </NavLink>
            </button>

            <button onClick={showNavBar} type="button" className="nav-display">
              <NavLink
                to={`/users/${user}/appointments`}
                className={({ isActive }) => (isActive ? 'enable' : 'nav-links')}
              >
                Appointments
              </NavLink>
            </button>

            {(authenticated)
              ? (
                <button type="button" className="nav-display">
                  <NavLink to="/logout" className="nav-links">Log Out</NavLink>
                </button>
              )
              : <NavLink to="/">Log In</NavLink> }
            <button
              type="button"
              onClick={showNavBar}
              className="nav-btn nav-close-btn"
            >
              <FaTimes />
            </button>
          </div>
        </nav>
        <button
          type="button"
          onClick={showNavBar}
          className="nav-btn menu-btn"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

NavCars.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};
export default NavCars;
