import {
  MAIN_GET_CONFIG_DATA,
  MAIN_HANDLE_ERROR,
  MAIN_ERROR_CLEAR,
} from './constants'

export default function mainReducer(state = {}, action) {
  switch (action.type) {
    case MAIN_GET_CONFIG_DATA: {
      return {
        ...state,
        mainConfig: action.payload,
      }
    }
    case MAIN_HANDLE_ERROR: {
      return {
        ...state,
        error: true,
        errorTrace: action.payload,
      }
    }

    case MAIN_ERROR_CLEAR: {
      return {
        ...state,
        error: false,
      }
    }
    default:
      return state
  }
}
