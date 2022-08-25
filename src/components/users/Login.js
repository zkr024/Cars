import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser, getUser } from '../../redux/users/user';

function Login() {
  // React States
  // const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    dispatch(loginUser(formDataObj.email, formDataObj.password));
    dispatch(getUser(formDataObj.email));
    setIsSubmitted(true);
    window.location.href = '/access';
  };

  // JSX code for login form
  const renderForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        {/* {renderErrorMessage("email")} */}
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
        {/* {renderErrorMessage("password")} */}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
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
