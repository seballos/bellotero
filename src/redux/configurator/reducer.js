import { CONFIGURATOR_GET_CONFIG_DATA } from './constants'

export default function mainReducer(state = {}, action) {
  switch (action.type) {
    case CONFIGURATOR_GET_CONFIG_DATA: {
      return {
        ...state,
        config: action.payload,
      }
    }
    default:
      return state
  }
}
