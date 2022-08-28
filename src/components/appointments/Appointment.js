import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { allSellers } from '../../redux/sellers/sellers';
import Cities from '../cities/cities';

const Appointment = () => {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellers);
  console.log(sellers);
  // console.log(sellers);
  // const { userId, carId } = useParams();
  // console.log('UserId '+ userId);
  // console.log('carId is ' + carId);
  useEffect(() => {
    dispatch(allSellers());
  }, [dispatch]);

  return (
    <div className="user-container" data-testid="user-a">
      <h1>Appointment Component</h1>
      <Form>
        <Cities />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Duration</Form.Label>
          <Form.Control type="email" placeholder="Enter duration" />
          {/* <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Appointment;
