import MissionsTableHead from "../../components/Missions/MissionsTableHead";
import { render } from "@testing-library/react";

test('Mission table has the correct headers', () => {
  const { getByText } = render( <MissionsTableHead />);
  expect(getByText('Description')).toBeInTheDocument();
});

