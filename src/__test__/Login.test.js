import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Login from '../components/users/Login';

const Container = () => {
  <BrowserRouter>
    <Login />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
