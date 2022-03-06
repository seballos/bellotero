import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from '../../components/Nav'
import Configurator from '../Configurator'
import Testimonial from '../Testimonial'
import './Home.styl'

const EMPTY_ROUTE = '#'
const CMP_MAP = {
  Testimonial: <Testimonial />,
  Configurator: <Configurator />,
}

const Home = ({ getConfigData, mainConfig }) => {
  useEffect(() => {
    getConfigData()
  }, [getConfigData])

  if (Object.keys(mainConfig).length !== 0) {
    const { items } = mainConfig.menu
    return (
      <>
        <Nav items={items}></Nav>
        <Routes>
          {items.map(({ route, text }) =>
            route !== EMPTY_ROUTE ? (
              <Route key={text} exact path={route} element={CMP_MAP[text]} />
            ) : (
              ''
            )
          )}
          <Route path="/" element={<Navigate to="page-1" />} />
        </Routes>
      </>
    )
  }

  return <h1>Home in Construction</h1>
}

Home.propTypes = {
  getConfigData: PropTypes.func.isRequired,
  mainConfig: PropTypes.object,
}

Home.defaultProps = {
  mainConfig: {},
}

export default Home
