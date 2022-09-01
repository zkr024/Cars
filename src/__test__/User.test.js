import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import User from '../components/users/Login';

const Container = () => {
  <BrowserRouter>
    <User />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
