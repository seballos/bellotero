import axios from 'axios'
import { store } from '../../../utils/mockReducer'
import * as actions from '../actions'

test('getTestimonialData is gotten', async () => {
  const MOCK_RESPONSE = { slider: {} }
  axios.get.mockResolvedValue({ data: MOCK_RESPONSE })
  await store.dispatch(actions.getTestimonialData())
  expect(store.getState().testimonial).toEqual({ config: MOCK_RESPONSE })
})

test('getTestimonialData has error', async () => {
  const errorTrace = new Error('went wrong')
  axios.get.mockRejectedValue(errorTrace)
  await store.dispatch(actions.getTestimonialData())
  expect(store.getState().main).toMatchObject({ error: true, errorTrace })
})
