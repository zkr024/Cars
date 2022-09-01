import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Car from '../components/details/Car';

const Container = () => {
  <BrowserRouter>
    <Car />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
