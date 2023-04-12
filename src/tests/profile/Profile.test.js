import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../../routes/Profile';

describe('Profile component', () => {
  const mockStore = configureStore([]);
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            id: 'mission1',
            name: 'Mission 1',
            reserved: true,
          },
          {
            id: 'mission2',
            name: 'Mission 2',
            reserved: false,
          },
        ],
      },
      rockets: {
        rockets: [
          {
            id: 'rocket1',
            name: 'Rocket 1',
            reserved: true,
          },
          {
            id: 'rocket2',
            name: 'Rocket 2',
            reserved: false,
          },
        ],
      },
    });

    component = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
  });

  test('renders the Mission and Rocket lists', () => {
    const missionListTitle = component.getByText('Missions');
    const rocketListTitle = component.getByText('Rockets');
    expect(missionListTitle).toBeInTheDocument();
    expect(rocketListTitle).toBeInTheDocument();
  });

  test('renders the reserved missions', () => {
    const missionList = component.getByTestId('Missions');
    expect(missionList).toHaveTextContent('Mission 1');
    expect(missionList).not.toHaveTextContent('Mission 2');
  });

  test('renders the reserved rockets', () => {
    const rocketList = component.getByTestId('Rockets');
    expect(rocketList).toHaveTextContent('Rocket 1');
    expect(rocketList).not.toHaveTextContent('Rocket 2');
  });
});
