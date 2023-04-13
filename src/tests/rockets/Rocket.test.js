import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rocket from '../../components/Rocket';

const mockStore = configureStore([]);

describe('Rocket Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      Rockets: {
        rockets: [],
      },
    });
  });

  it('should render Rocket component correctly', () => {
    const rocket = {
      id: '1',
      name: 'Falcon 1',
      image: 'https://example.com/falcon1.jpg',
      description: 'The Falcon 1 was SpaceX\'s first orbital rocket.',
      reserved: false,
    };
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Rocket
          id={rocket.id}
          name={rocket.name}
          image={rocket.image}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      </Provider>,
    );

    expect(getByText(rocket.name)).toBeInTheDocument();
    expect(getByAltText(rocket.name)).toBeInTheDocument();
    expect(getByText(/reserve rocket/i)).toBeInTheDocument();
  });

  it('should call booking action when reserve button is clicked', () => {
    const rocket = {
      id: '1',
      name: 'Falcon 1',
      image: 'https://example.com/falcon1.jpg',
      description: 'The Falcon 1 was SpaceX\'s first orbital rocket.',
      reserved: false,
    };
    const { getByText } = render(
      <Provider store={store}>
        <Rocket
          id={rocket.id}
          name={rocket.name}
          image={rocket.image}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      </Provider>,
    );

    const reserveButton = getByText(/reserve rocket/i);
    fireEvent.click(reserveButton);

    const expectedAction = {
      type: 'Rockets/booking',
      payload: '1',
    };
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should call cancelBooking action when cancel reservation button is clicked', () => {
    const rocket = {
      id: '1',
      name: 'Falcon 1',
      image: 'https://example.com/falcon1.jpg',
      description: 'The Falcon 1 was SpaceX\'s first orbital rocket.',
      reserved: true,
    };
    const { getByText } = render(
      <Provider store={store}>
        <Rocket
          id={rocket.id}
          name={rocket.name}
          image={rocket.image}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      </Provider>,
    );

    const cancelReservationButton = getByText(/cancel reservation/i);
    fireEvent.click(cancelReservationButton);

    const expectedAction = {
      type: 'Rockets/cancelBooking',
      payload: '1',
    };
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
