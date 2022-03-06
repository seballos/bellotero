import { screen } from '@testing-library/react'
import axios from 'axios'
import App from './App'
import { renderWithReduxProvider } from './utils/testUtils'

test('should render properly', () => {
  const MOCK_RESPONSE = { menu: { items: [] } }
  axios.get.mockResolvedValue({ data: MOCK_RESPONSE })
  renderWithReduxProvider(<App />)
  expect(screen.getByRole('heading')).toBeTruthy()
})
