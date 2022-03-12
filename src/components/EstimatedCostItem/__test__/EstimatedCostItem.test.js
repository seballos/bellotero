import { act, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EstimatedCostItem from '..'

const setup = (baseProps) => {
  const props = {
    title: 'test title',
    min: 10,
    max: 20,
    valueKey: 'testkey',
    onChangeValue: jest.fn(),
    ...baseProps,
  }
  const wrapper = render(<EstimatedCostItem {...props} />)
  return { wrapper, props }
}

test('render button properly with basic props', () => {
  const changeValue = 15
  const { wrapper, props } = setup()
  const { title, onChangeValue, min, valueKey } = props
  expect(screen.getByRole('heading')).toHaveTextContent(title)
  expect(onChangeValue).toBeCalledWith(min, valueKey)
  const slider = screen.getByRole('slider')
  act(() => {
    fireEvent.input(slider, { target: { valueAsNumber: changeValue } })
  })
  expect(onChangeValue).toHaveBeenCalledTimes(2)
  expect(onChangeValue).toBeCalledWith(changeValue, valueKey)
  expect(wrapper.getByLabelText('selected-value').value).toBe(
    changeValue.toString()
  )
})

test('render button properly with prefix prop', () => {
  const { wrapper, props } = setup({ prefix: '$' })
  const { min } = props
  expect(wrapper.getByLabelText('prefix-selected-value').value).toBe(
    min.toString()
  )
})
