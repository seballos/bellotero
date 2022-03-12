import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'

import InputNumber from '../InputNumber'
import Range from '../Range'
import './EstimatedCostItem.styl'

const EstimatedCostItem = ({
  title,
  min,
  max,
  prefix,
  valueKey,
  onChangeValue,
}) => {
  const [value, setValue] = useState(min)
  const handleChange = useCallback((evt) => {
    setValue(evt.target.valueAsNumber)
  }, [])

  useEffect(() => {
    onChangeValue(value, valueKey)
  }, [value, valueKey, onChangeValue])

  return (
    <div className="estimated-item">
      <div className="estimated-item__data">
        <h6 className="estimated-item__data__title roboto-bold--14">{title}</h6>
        <InputNumber prefix={prefix} readOnly value={value} />
      </div>
      <Range
        step={1}
        min={min}
        max={max}
        onInput={handleChange}
        value={value}
      />
    </div>
  )
}

EstimatedCostItem.propTypes = {
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  /**
   * This prop stores the key associated to the required value
   * to calculate properly the estimated costs
   */
  valueKey: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  prefix: PropTypes.string,
}

EstimatedCostItem.defaultProp = {
  prefix: '',
}

export default EstimatedCostItem
