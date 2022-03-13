import api from './api'
import {
  MAIN_GET_CONFIG_DATA,
  MAIN_HANDLE_ERROR,
  MAIN_ERROR_CLEAR,
} from './constants'

export const getConfigData = () => async (dispatch) => {
  dispatch(errorClear())
  try {
    const configData = await api.getConfigData()
    dispatch({ type: MAIN_GET_CONFIG_DATA, payload: configData })
  } catch (error) {
    dispatch(handleError(error))
  }
}

export const handleError = (error) => (dispatch) => {
  dispatch({ type: MAIN_HANDLE_ERROR, payload: error })
}

export const errorClear = () => (dispatch) => {
  dispatch({ type: MAIN_ERROR_CLEAR })
}
