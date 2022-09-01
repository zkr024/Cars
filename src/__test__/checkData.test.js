import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import checkData from '../components/users/checkData';

const Container = () => {
  <BrowserRouter>
    <checkData />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
