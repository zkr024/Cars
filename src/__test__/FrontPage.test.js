import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import FrontPage from '../components/frontPage/FrontPage';

const Container = () => {
  <BrowserRouter>
    <FrontPage />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
