import { act, fireEvent, screen, within } from '@testing-library/react'
import Nav from '..'
import { renderWithRouter } from '../../../utils/testUtils'

const items = [
  {
    text: 'Testimonial',
    route: 'page-1',
  },
  {
    text: 'Configurator',
    route: 'page-2',
  },
]

test('nav should render properly', () => {
  renderWithRouter(<Nav items={items} />)
  const list = screen.getByRole('list')
  const { getAllByRole } = within(list)
  expect(getAllByRole('listitem')).toHaveLength(items.length)
})

test('nav should open menu if closed', () => {
  renderWithRouter(<Nav items={items} />)
  const labelEl = screen.getByLabelText('nav-menu')
  act(() => {
    fireEvent.click(labelEl)
  })
  expect(screen.getByRole('checkbox').checked).toBe(true)
})

test('nav should close menu if click on item when was opened', () => {
  renderWithRouter(<Nav items={items} />)
  const labelEl = screen.getByLabelText('nav-menu')
  act(() => {
    fireEvent.click(labelEl)
  })
  expect(screen.getByRole('checkbox').checked).toBe(true)
  act(() => {
    fireEvent.click(screen.getByText('Testimonial'))
  })
  expect(screen.getByRole('checkbox').checked).toBe(false)
})
