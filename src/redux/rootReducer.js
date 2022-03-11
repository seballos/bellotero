import { combineReducers } from 'redux'
import mainReducer from './main/reducer'
import testimonialReducer from './testimonial/reducer'
import configuratorReducer from './configurator/reducer'
export default combineReducers({
  main: mainReducer,
  testimonial: testimonialReducer,
  configurator: configuratorReducer,
})
