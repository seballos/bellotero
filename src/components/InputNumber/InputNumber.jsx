import PropTypes from 'prop-types'
import './InputNumber.styl'

const InputNumber = ({ prefix, ...props }) => {
  if (prefix) {
    return (
      <div className="input-number__wrapper">
        <input
          aria-label="prefix-selected-value"
          className="roboto-medium--36 input-number input-number--prefixed"
          {...props}
        />
        <span className="roboto-medium--24">{prefix}</span>
      </div>
    )
  }
  return (
    <input
      aria-label="selected-value"
      className="roboto-medium--36 input-number"
      {...props}
    />
  )
}

InputNumber.propTypes = {
  prefix: PropTypes.string,
}

InputNumber.defaultProps = {
  prefix: '',
}

export default InputNumber
