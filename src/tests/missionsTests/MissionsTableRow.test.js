import MissionsTableRow from "../../components/Missions/MissionsTableRow";
import renderWithProviders from "../utils/testUtils";

test('Missions table shows an ACTIVE MEMBER tag', () => {
  const { getByText } = renderWithProviders(<MissionsTableRow 
    name="mock mission"
    description="mock description"
    id="someId"
    reserved={true}
  />)
  expect(getByText('Active member')).toBeInTheDocument();
})

test('Missions table shows an not a member tag', () => {
  const { getByText } = renderWithProviders(<MissionsTableRow 
    name="mock mission"
    description="mock description"
    id="someId"
    reserved={false}
  />)
  expect(getByText('not a member')).toBeInTheDocument();
})