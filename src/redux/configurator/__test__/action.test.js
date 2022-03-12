import axios from 'axios'
import { store } from '../../../utils/mockReducer'
import * as actions from '../actions'

test('getConfiguratorData is gotten', async () => {
  const MOCK_RESPONSE = { calculator: {} }
  axios.get.mockResolvedValue({ data: MOCK_RESPONSE })
  await store.dispatch(actions.getConfiguratorData())
  expect(store.getState().configurator).toEqual({ config: MOCK_RESPONSE })
})
