import { React } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Cities from '../cities/cities';
import Sellers from '../sellers/sellers';

// eslint-disable-next-line import/no-named-as-default
import postAppointment from '../../redux/appointments/appointments';

const Appointment = () => {
  const { userId, carId } = useParams();
  // console.log(`userId is  ${userId}`);
  // console.log(`carId is  ${carId}`);

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
          <Form.Label>Duration</Form.Label>
          <Form.Control name="duration" type="text" placeholder="Enter duration" autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBranch">
          <Form.Label>Enter Branch</Form.Label>
          <Form.Control name="branch" type="text" placeholder="Enter Branch" autoComplete="off" />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Default Locat Branch" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Appointment;
