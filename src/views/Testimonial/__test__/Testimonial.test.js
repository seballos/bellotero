import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Testimonial from '..'
import { renderWithReduxProvider } from '../../../utils/testUtils'
import { overwriteStore } from '../../../utils/mockReducer'
import { getTestimonialData } from '../../../redux/testimonial/actions'
jest.mock('../../../redux/testimonial/actions')

test('render <Testimonial /> without config', () => {
  const store = overwriteStore({ testimonial: { config: {} } })
  const wrapper = renderWithReduxProvider(<Testimonial />, { store })
  expect(wrapper.container).toBeEmptyDOMElement()
  expect(getTestimonialData).toBeCalled()
})

test('render <Testimonial /> with config', () => {
  const config = {
    slider: {
      title: 'test title',
      reviews: [
        { name: 'test name', position: 'test posi', comment: 'test comment' },
      ],
    },
  }
  const store = overwriteStore({ testimonial: { config } })
  const wrapper = renderWithReduxProvider(<Testimonial />, { store })
  expect(wrapper.container).not.toBeEmptyDOMElement()
  expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
    config.slider.title
  )
  expect(getTestimonialData).toBeCalled()
})
