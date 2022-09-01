import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Sellers from '../components/sellers/sellers';

const Container = () => {
  <BrowserRouter>
    <Sellers />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
