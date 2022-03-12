import { act, fireEvent, render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import Reviews from '..'

const config = [
  {
    name: 'test1',
    position: 'test1 position',
    comment: 'test comment',
  },
  {
    name: 'test2',
    position: 'test2 position',
    comment: 'test other comment',
  },
]

test('render slides an amount of slides according to config', () => {
  render(<Reviews config={config} />)
  const list = screen.getByRole('list')
  const { getAllByRole } = within(list)
  expect(getAllByRole('listitem')).toHaveLength(config.length)
})

test('make transitions should work properly', () => {
  render(<Reviews config={config} />)
  const [prevButton, nextButton] = screen.getAllByRole('button')
  expect(screen.getByLabelText('current-slide')).toHaveTextContent(
    `1/${config.length}`
  )
  act(() => {
    fireEvent.click(nextButton)
  })
  expect(screen.getByLabelText('current-slide')).toHaveTextContent(
    `2/${config.length}`
  )
  act(() => {
    fireEvent.click(nextButton)
  })
  expect(screen.getByLabelText('current-slide')).toHaveTextContent(
    `1/${config.length}`
  )
  act(() => {
    fireEvent.click(prevButton)
  })
  expect(screen.getByLabelText('current-slide')).toHaveTextContent(
    `2/${config.length}`
  )
})
