import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser, getUser } from '../../redux/users/user';
import checkData from './checkData';
import { browserHistory } from 'react-router'

function Login({ handleClick }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    dispatch(loginUser(formDataObj.email, formDataObj.password));
    dispatch(getUser(formDataObj.email));
    // setTimeout(() => { checkData(setIsSubmitted); }, 2000);
    handleClick(true);
    // navigate(`/home`);
    browserHistory.push('/home')
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
    <div className="user-container" data-testid="user-a">
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User authenticated</div> : renderForm}
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Login;
