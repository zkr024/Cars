/* eslint-disable global-require */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cities from '../cities/cities';
import Sellers from '../sellers/sellers';
import { postAppointment } from '../../redux/appointments/appointments';
import '../../assets/appointmentForm.css';

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { userId, carId } = useParams();
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const formData = new FormData(event.target);
      const formDataObj = Object.fromEntries(formData.entries());
      dispatch(postAppointment(
        userId,
        carId,
        formDataObj.seller_id,
        formDataObj.city_id,
        formDataObj.date_for,
        formDataObj.duration,
        formDataObj.branch,
      ));
      setValidated(true);
      setIsSubmitted(true);
    }
  };

  // eslint-disable-next-line implicit-arrow-linebreak
  const toDay = new Date().toISOString().substring(0, 10);
  const renderForm = (
    <div className="page-position">
      <h1>Appointment Component</h1>
      <div className="form-appointment">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Cities />
          <Sellers />

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Select Date</Form.Label>
            <Form.Control name="date_for" type="date" defaultValue={toDay} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter date.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDuration">
            <Form.Label>Duration (in minutes)</Form.Label>
            <Form.Control name="duration" type="number" placeholder="Enter duration" autoComplete="off" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter duration.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBranch">
            <Form.Label>Enter Branch</Form.Label>
            <Form.Control name="branch" type="text" placeholder="Enter Branch" autoComplete="off" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter branch.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="cars" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
  return (
    <div className="appointment-success">
      { isSubmitted
        ? (
          <>
            <div className="message-success">
              Appointment Created!!!!
              <div className="appointment-completed">
                <img
                  src={require('../../assets/gift/checkmark.gif')}
                  alt="car gift"
                  className="car_gif"
                />
              </div>
            </div>
          </>
        )
        : renderForm }
    </div>
  );
};

export default Appointment;
