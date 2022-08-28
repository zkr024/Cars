import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
import { createUser } from '../../redux/users/user';

const User = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    dispatch(createUser(
      formDataObj.name,
      formDataObj.email,
      formDataObj.password,
      formDataObj.password_confirmation,
      formDataObj.age,
      formDataObj.phone,
    ));
    window.location.href = '/';
  };
  return (
    <div className="user-container" data-testid="user-a">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Enter password" required />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be more than 6 characters long,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control name="password_confirmation" type="password" placeholder="Confirm password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control name="phone" type="phone" placeholder="Enter phone" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control name="age" type="number" placeholder="Enter age" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group className="mb-3" controlId="formBasicSignUp">
          Already have an account?
          <NavLink to="/" className="link">Log in</NavLink>
        </Form.Group>
      </Form>
    </div>
  );
};

export default User;
