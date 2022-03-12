import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '..'
import { renderWithReduxProviderAndRouter } from '../../../utils/testUtils'
import { getConfigData } from '../../../redux/main/actions'
import { overwriteStore } from '../../../utils/mockReducer'
jest.mock('../../../redux/main/actions')
jest.mock('../../../redux/testimonial/actions')

const setup = (configBase) => {
  const store = overwriteStore({ main: { mainConfig: configBase } })
  const wrapper = renderWithReduxProviderAndRouter(<Home />, { store })
  return { wrapper }
}

test('render <Home /> properly with empty config', () => {
  setup({})
  expect(screen.getByRole('heading')).toHaveTextContent('Loading...')
  expect(getConfigData).toBeCalled()
})

test('render <Home /> properly with config', () => {
  const config = {
    menu: {
      items: [
        {
          text: 'Testimonial',
          route: 'page-1',
        },
        {
          text: 'Stories',
          route: '#',
        },
      ],
    },
  }
  setup(config)
  expect(screen.getByRole('navigation')).toBeVisible()
})
