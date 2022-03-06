import configureStore from '../redux/configureStore'

export const overwriteStore = (storeValue = {}) => {
  const store = configureStore(storeValue)
  return store
}

export const store = overwriteStore()
