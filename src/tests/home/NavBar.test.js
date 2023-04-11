import render from '../utils/testUtils';
import Navbar from '../../components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
test('Home header test', () => {
  const { getByText, debug } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
  debug()
  expect(getByText('Rockets')).toBeInTheDocument();
});
