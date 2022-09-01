import React, { useState, useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createUser } from '../../redux/users/user';

const User = () => {
  const [validated, setValidated] = useState(false);
  const password = useRef();
  const cPassword = useRef();
  const [showErrorMessage, setShowErrorMessage] = useState(true);
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isCPasswordDirty) {
      if (password.current.value === cPassword.current.value) {
        setShowErrorMessage(false);
      } else {
        setShowErrorMessage(true);
      }
    }
  }, [isCPasswordDirty]);
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
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
      setValidated(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  };
  const checkPasswords = () => {
    setIsCPasswordDirty(true);
    if (isCPasswordDirty) {
      if (password.current.value === cPassword.current.value) {
        setShowErrorMessage(false);
      } else {
        setShowErrorMessage(true);
      }
    }
  };
  return (
    <div className="login-form-container">
      <div className="login-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter name" minLength={3} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
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
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              ref={password}
              minLength={6}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              name="password_confirmation"
              type="password"
              placeholder="Confirm password"
              ref={cPassword}
              minLength={6}
              onChange={checkPasswords}
              required
            />
            {showErrorMessage && isCPasswordDirty ? <Form.Control.Feedback type="invalid">Password and Confirm Password does not match.</Form.Control.Feedback> : <Form.Control.Feedback>Looks good!</Form.Control.Feedback>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" type="tel" placeholder="Enter phone" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control name="age" type="number" placeholder="Enter age" min="18" max="99" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid age.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="cars" type="submit">
            Submit
          </Button>
          <Form.Group className="mb-3" controlId="formBasicSignUp">
            Already have an account?
            <NavLink to="/" className="link">Log in</NavLink>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default User;
