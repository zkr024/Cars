import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import AppointmentList from '../components/appointments/Appointment';

const Container = () => {
  <BrowserRouter>
    <AppointmentList />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
