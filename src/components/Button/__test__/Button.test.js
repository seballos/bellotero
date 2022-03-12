import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '..'

test('render button properly without props', () => {
  render(<Button />)
  expect(screen.getByRole('button')).toBeEmptyDOMElement()
})

test('render button properly with children', () => {
  const text = 'testing'
  render(<Button>{text}</Button>)
  expect(screen.getByRole('button')).toHaveTextContent(text)
})
