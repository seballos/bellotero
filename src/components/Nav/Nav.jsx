import PropTypes from 'prop-types'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.styl'

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
        <Link
          className="nav__menu__link"
          onClick={handleMenuItemClick}
          to={route}
        >
          {text}
        </Link>
      </li>
    ),
    [handleMenuItemClick]
  )

  return (
    <nav className="nav">
      <section>belloterio.io</section>
      <input
        id="menu-toggle"
        className="nav__menu__toggle"
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <label className="nav__menu" htmlFor="menu-toggle">
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
