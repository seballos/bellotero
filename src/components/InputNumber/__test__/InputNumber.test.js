import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputNumber from '..'

test('render without prefix properly', () => {
  render(<InputNumber />)
  expect(screen.getByLabelText('selected-value')).toBeVisible()
})

test('render with prefix properly', () => {
  render(<InputNumber prefix="$" />)
  expect(screen.getByLabelText('prefix-selected-value')).toBeVisible()
})
