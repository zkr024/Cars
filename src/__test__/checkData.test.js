import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Container = () => {
  <BrowserRouter>
    <checkData />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
