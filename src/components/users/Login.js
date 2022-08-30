/* eslint-disable global-require */
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser, getUser } from '../../redux/users/user';
import checkData from './checkData';
import '../../assets/access.css';

function Login({ handleClick }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    dispatch(loginUser(formDataObj.email, formDataObj.password));
    dispatch(getUser(formDataObj.email));
    setTimeout(() => { checkData.checkData(setIsSubmitted, handleClick); }, 500);
  };

  const renderForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        {/* {renderErrorMessage("email")} */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
        {/* {renderErrorMessage("password")} */}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Group className="mb-3" controlId="formBasicSignUp">
        <Link to="/user">Sign Up</Link>
      </Form.Group>
    </Form>
  );

  return (
    <div className="user-container page-position" data-testid="user-a">
      <div className="app">
        <div className="login-form">
          { isSubmitted
            ? (
              <>
                <div> Welcome to Cars App! </div>
                <img
                  src={require('../../assets/gift/car.gif')}
                  alt="car gift"
                  className="car_gif intro_gif"
                />
              </>
            )
            : renderForm }
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Login;
