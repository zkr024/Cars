import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Appointment from '../components/appointments/Appointment';

const Container = () => {
  <BrowserRouter>
    <Appointment />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
