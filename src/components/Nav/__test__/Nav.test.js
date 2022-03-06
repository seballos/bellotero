import { screen, within } from '@testing-library/react'
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
