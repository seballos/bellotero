import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error from '..'
test('<Error/> page', () => {
  render(<Error />)
  expect(screen.getByRole('heading')).toBeVisible()
})
