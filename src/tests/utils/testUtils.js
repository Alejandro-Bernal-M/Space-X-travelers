import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { setupStore } from '../../redux/store';
// As a basic setup, import your same slice reducers

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
