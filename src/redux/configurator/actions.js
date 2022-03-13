import { handleError } from '../main/actions'
import api from './api'
import { CONFIGURATOR_GET_CONFIG_DATA } from './constants'

export const getConfiguratorData = () => async (dispatch) => {
  try {
    const configData = await api.getConfiguratorData()
    dispatch({ type: CONFIGURATOR_GET_CONFIG_DATA, payload: configData })
  } catch (error) {
    dispatch(handleError(error))
  }
}
