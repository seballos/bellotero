/* eslint-disable react/prop-types */
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import configureStore from '../redux/configureStore'

export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: MemoryRouter })
}

export const renderWithReduxProvider = (
  ui,
  {
    preloadedState,
    store = configureStore(preloadedState),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export const renderWithReduxProviderAndRouter = (
  ui,
  { store, ...renderOptions }
) => {
  function Wrapper({ children }) {
    window.history.pushState({}, 'Test page', '/')
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    )
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}
