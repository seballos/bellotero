import { screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Configurator from '..'
import { renderWithReduxProvider } from '../../../utils/testUtils'
import { overwriteStore } from '../../../utils/mockReducer'
import { getConfiguratorData } from '../../../redux/configurator/actions'
jest.mock('../../../redux/configurator/actions')

const config = {
  calculator: {
    title: 'test title configurator',
    description: 'test description configurator',
  },
}

const formatter = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 2,
})

const setup = (configBase) => {
  const store = overwriteStore({ configurator: { config: configBase } })
  const wrapper = renderWithReduxProvider(<Configurator />, { store })
  return { wrapper }
}

test('render <Configurator /> empty component if there is no config', () => {
  const { wrapper } = setup({})
  expect(wrapper.container).toBeEmptyDOMElement()
  expect(getConfiguratorData).toBeCalled()
})

test('render <Configurator /> when config is provided and initial costs', () => {
  const expectedEstimateFoodSavings = 3
  const expectedEstimateAnualSavings = expectedEstimateFoodSavings + 1337 * 1
  setup(config)
  expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
    config.calculator.title
  )
  expect(
    screen.getByLabelText('estimated-cost-food-savings')
  ).toHaveTextContent(expectedEstimateFoodSavings)
  expect(screen.getByLabelText('estimated-anual-savings')).toHaveTextContent(
    formatter.format(expectedEstimateAnualSavings)
  )
})

test('recaulculate estimate values <Configurator />', () => {
  const food = 15
  const employees = 8
  const expectedEstimateFoodSavings = food * 0.3
  const expectedEstimateAnualSavings =
    expectedEstimateFoodSavings + 1337 * employees
  setup(config)
  const [sliderFood, sliderEmplioyees] = screen.getAllByRole('slider')
  act(() => {
    fireEvent.input(sliderFood, { target: { valueAsNumber: food } })
    fireEvent.input(sliderEmplioyees, { target: { valueAsNumber: employees } })
  })
  expect(
    screen.getByLabelText('estimated-cost-food-savings')
  ).toHaveTextContent(expectedEstimateFoodSavings)
  expect(screen.getByLabelText('estimated-anual-savings')).toHaveTextContent(
    formatter.format(expectedEstimateAnualSavings)
  )
})
