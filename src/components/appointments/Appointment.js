import { React } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Cities from '../cities/cities';
import Sellers from '../sellers/sellers';

import { postAppointment } from '../../redux/appointments/appointments';

const Appointment = () => {
  const { userId, carId } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
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
  };
  // eslint-disable-next-line implicit-arrow-linebreak
  const toDay = new Date().toISOString().substring(0, 10);
  return (
    <div className="user-container" data-testid="user-a">
      <h1>Appointment Component</h1>
      <Form onSubmit={handleSubmit}>
        <Cities />
        <Sellers />

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Select Date</Form.Label>
          <Form.Control name="date_for" type="date" defaultValue={toDay} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDuration">
          <Form.Label>Duration (in minutes)</Form.Label>
          <Form.Control name="duration" type="number" placeholder="Enter duration" autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBranch">
          <Form.Label>Enter Branch</Form.Label>
          <Form.Control name="branch" type="text" placeholder="Enter Branch" autoComplete="off" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Appointment;
