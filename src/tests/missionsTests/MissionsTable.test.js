import React from 'react';
import { renderWithProviders } from '../utils/testUtils';
import MissionsTable from '../../components/Missions/MissionsTable';
import mockMissions from '../utils/mockMissions';

test('Missions table is rendering', () => {
  const { getByText } = renderWithProviders(<MissionsTable />, {
    preloadedState: {
      missions: {
        missions: mockMissions,
      },
    },
  });
  expect(getByText('Description')).toBeInTheDocument();
});

test('Missions table renders the correct data', () => {
  const { getByText } = renderWithProviders(<MissionsTable />, {
    preloadedState: {
      missions: {
        missions: mockMissions,
      },
    },
  });
  expect(getByText('Thaicom')).toBeInTheDocument();
});
