import MissionsTableRow from '../../components/Missions/MissionsTableRow';
import render from '../utils/testUtils';

test('Missions table shows an ACTIVE MEMBER tag', () => {
  const { getByText } = render(<MissionsTableRow
    name="mock mission"
    description="mock description"
    id="someId"
    reserved
  />);
  expect(getByText('Active member')).toBeInTheDocument();
});

test('Missions table shows an not a member tag', () => {
  const { getByText } = render(<MissionsTableRow
    name="mock mission"
    description="mock description"
    id="someId"
    reserved={false}
  />);
  expect(getByText('not a member')).toBeInTheDocument();
});
