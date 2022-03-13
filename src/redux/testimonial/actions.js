import { handleError } from '../main/actions'
import api from './api'
import { TESTIMONIAL_GET_CONFIG_DATA } from './constants'

export const getTestimonialData = () => async (dispatch) => {
  try {
    const configData = await api.getTestimonialData()
    dispatch({ type: TESTIMONIAL_GET_CONFIG_DATA, payload: configData })
  } catch (error) {
    dispatch(handleError(error))
  }
}
