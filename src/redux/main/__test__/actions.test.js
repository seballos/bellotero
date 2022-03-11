import axios from 'axios'
import { store } from '../../../utils/mockReducer'
import * as actions from '../actions'

test('getConfigData is gotten', async () => {
  const MOCK_RESPONSE = { menu: {} }
  axios.get.mockResolvedValue({ data: MOCK_RESPONSE })
  await store.dispatch(actions.getConfigData())
  expect(store.getState().main).toEqual({ mainConfig: MOCK_RESPONSE })
})
