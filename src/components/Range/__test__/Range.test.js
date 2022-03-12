import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Range from '..'

test('render properly range input and calculate progress mousemove value', () => {
  const props = { min: 10, max: 15 }
  const expectedPercentage = '40%'
  const value = 12
  render(<Range {...props} />)
  const slider = screen.getByRole('slider')
  fireEvent.mouseMove(slider, { target: { value } })
  expect(slider.style.getPropertyValue('--webkitProgressPercent')).toBe(
    expectedPercentage
  )
})

test('render properly range input and calculate progress according to mouseDown and mouseUp', () => {
  const props = { min: 10, max: 15 }
  const expectedPercentage = '40%'
  const value = 12
  render(<Range {...props} />)
  const slider = screen.getByRole('slider')
  fireEvent.mouseDown(slider, { target: { value } })
  fireEvent.mouseUp(slider)
  expect(slider.style.getPropertyValue('--webkitProgressPercent')).toBe(
    expectedPercentage
  )
})
