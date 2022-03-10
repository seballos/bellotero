import PropTypes from 'prop-types'
import cx from 'classnames'
import './Button.styl'
const Button = ({ children, className, ...props }) => (
  <button className={cx('button', className)} {...props}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Button.defaultProps = {
  className: '',
}

export default Button
