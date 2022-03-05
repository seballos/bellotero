import { MAIN_GET_CONFIG_DATA } from './constants'

export default function mainReducer(state = {}, action) {
  switch (action.type) {
    case MAIN_GET_CONFIG_DATA: {
      return {
        ...state,
        mainConfig: action.payload,
      }
    }
    default:
      return state
  }
}
