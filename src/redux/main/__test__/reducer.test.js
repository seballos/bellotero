import { MAIN_GET_CONFIG_DATA } from '../constants'
import reducer from '../reducer'

test('check main reducer default', () => {
  expect(reducer(undefined, {})).toEqual({})
})

test('check MAIN_GET_CONFIG_DATA', () => {
  expect(reducer({}, { type: MAIN_GET_CONFIG_DATA, payload: {} })).toEqual({
    mainConfig: {},
  })
})
