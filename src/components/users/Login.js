import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, getUser } from '../../redux/users/user';
import checkData from './checkData';

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    dispatch(loginUser(formDataObj.email, formDataObj.password));
    dispatch(getUser(formDataObj.email));

    setTimeout(() => { checkData(setIsSubmitted); }, 500);
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

export default Login;
