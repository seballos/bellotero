import PropTypes from 'prop-types'
import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import './Nav.styl'
import Logo from '../../assets/images/logo.svg'

const EMPTY_ROUTE = '#'
const Nav = ({ items }) => {
  const [checked, setChecked] = useState(false)
  const handleMenuItemClick = useCallback(() => {
    setChecked(false)
  }, [])
  const handleChange = (evt) => {
    setChecked(evt.target.checked)
  }
  const renderItem = useCallback(
    ({ text, route }) => (
      <li key={text}>
        <NavLink
          className={({ isActive }) =>
            cx('nav__menu__link roboto-medium--16', {
              'nav__menu__link--active': isActive & (route !== EMPTY_ROUTE),
              'nav__menu__link--disabled': route === EMPTY_ROUTE,
            })
          }
          onClick={handleMenuItemClick}
          to={route}
        >
          {text}
        </NavLink>
      </li>
    ),
    [handleMenuItemClick]
  )

  return (
    <nav className="nav">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <input
        id="menu-toggle"
        className="nav__menu__toggle"
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <label aria-label="nav-menu" className="nav__menu" htmlFor="menu-toggle">
        <div className="nav__menu__button"></div>
      </label>
      <ul className="nav__list">{items.map(renderItem)}</ul>
    </nav>
  )
}

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Nav
