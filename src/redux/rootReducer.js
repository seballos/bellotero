import { combineReducers } from 'redux'
import mainReducer from './main/reducer'
import testimonialReducer from './testimonial/reducer'
export default combineReducers({
  main: mainReducer,
  testimonial: testimonialReducer,
})
