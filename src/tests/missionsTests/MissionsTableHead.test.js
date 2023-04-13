import { render } from '@testing-library/react';
import MissionsTableHead from '../../components/Missions/MissionsTableHead';

test('Mission table has the correct headers', () => {
  const { getByText } = render(<MissionsTableHead />);
  expect(getByText('Description')).toBeInTheDocument();
});
