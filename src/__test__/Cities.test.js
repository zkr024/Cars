import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Cities from '../components/cities/cities';

const Container = () => {
  <BrowserRouter>
    <Cities />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
