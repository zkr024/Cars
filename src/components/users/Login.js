import React, { useState } from 'react';
// import ReactDOM from "react-dom";
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/users/user';

function Login() {
  // const { email, password } = document.forms[0];
  // React States
  // const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //   const errors = {
  //   uname: "invalid username ",
  //   pass: "invalid password"
  //   };

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    dispatch(loginUser(formDataObj.email, formDataObj.password));
    setIsSubmitted(true);
  };

  //   const handleSubmit = (event) => {
  //  Prevent page reload
  // event.preventDefault();
  // Find user login info
  // const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  // if (userData) {
  //   if (userData.password !== pass.value) {
  //   // Invalid password
  //   setErrorMessages({ name: "pass", message: errors.pass });
  //   } else {
  //   setIsSubmitted(true);
  //   }
  // } else {
  //   // Username not found
  //   setErrorMessages({ name: "uname", message: errors.uname });
  // }
  //   };

  // Generate JSX code for error message
  // const renderErrorMessage = (name) => name === errorMessages.name &&
  // (<div className="error">{errorMessages.message}</div>);

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
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
