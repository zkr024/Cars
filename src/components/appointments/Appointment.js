import { React } from 'react';
// import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Cities from '../cities/cities';
import Sellers from '../sellers/sellers';
// import Date from './Date';

const Appointment = () => {
// const { userId, carId } = useParams();
// console.log('UserId '+ userId);
// console.log('carId is ' + carId);
  // eslint-disable-next-line implicit-arrow-linebreak
  const toDay = new Date().toISOString().substring(0, 10);
  return (
    <div className="user-container" data-testid="user-a">
      <h1>Appointment Component</h1>
      <Form>
        <Cities />
        <Sellers />
        <Form.Group className="mb-3" controlId="formBasicDuration">
          <Form.Label>Duration</Form.Label>
          <Form.Control type="email" placeholder="Enter duration" autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBranch">
          <Form.Label>Enter Branch</Form.Label>
          <Form.Control type="text" placeholder="Enter Branch" autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" defaultValue={toDay} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Default Locat Branch" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Appointment;
