import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import DeleteCars from '../components/car/AllCars';

const Container = () => {
  <BrowserRouter>
    <DeleteCars />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
