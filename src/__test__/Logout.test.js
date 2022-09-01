import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Logout from '../components/users/Login';

const Container = () => {
  <BrowserRouter>
    <Logout />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
