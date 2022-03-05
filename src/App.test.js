import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('Should render the App', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
