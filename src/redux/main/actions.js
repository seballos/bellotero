import api from './api'
import { MAIN_GET_CONFIG_DATA } from './constants'

export const getConfigData = () => async (dispatch) => {
  try {
    const configData = await api.getConfigData()
    dispatch({ type: MAIN_GET_CONFIG_DATA, payload: configData })
  } catch (error) {
    console.error(error)
  }
}
