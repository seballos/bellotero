import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './redux/configureStore'

const store = configureStore()

const render = (Component) =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )

render(App)
if (module.hot) module.hot.accept('./App', () => render(App))
