/* eslint-disable global-require */
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser, getUser } from '../../redux/users/user';
import checkData from './checkData';
import '../../assets/access.css';

function Login({ handleClick }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const formData = new FormData(event.target);
      const formDataObj = Object.fromEntries(formData.entries());
      dispatch(loginUser(formDataObj.email, formDataObj.password));
      dispatch(getUser(formDataObj.email));
      setValidated(true);
      setTimeout(() => { checkData.checkData(setIsSubmitted, handleClick); }, 3000);
    }
  };

  const renderForm = (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please enter your email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup hasValidation>
          <Form.Control name="password" type="password" placeholder="Password" minLength={6} required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter your password.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Button variant="cars" type="submit">
        Submit
      </Button>
      <Form.Group className="mb-3" controlId="formBasicSignUp">
        <Link to="/user">Sign Up</Link>
      </Form.Group>
    </Form>
  );

  return (
    <div className="login-form-container">
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
