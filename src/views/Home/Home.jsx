import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from '../../components/Nav'
import Configurator from '../Configurator'
import Testimonial from '../Testimonial'
import Error from '../Error'
import './Home.styl'

const EMPTY_ROUTE = '#'
const ERROR_ROUTE = '/error'
const CMP_MAP = {
  Testimonial: <Testimonial />,
  Configurator: <Configurator />,
}

const Home = ({ getConfigData, mainConfig, error }) => {
  useEffect(() => {
    getConfigData()
  }, [getConfigData])
  const { pathname } = useLocation()
  if (Object.keys(mainConfig).length !== 0 || error) {
    const { items = [] } = mainConfig.menu || {}
    if (error && pathname !== ERROR_ROUTE) {
      return <Navigate to={ERROR_ROUTE} />
    }
    return (
      <>
        <Nav items={items} />
        <Routes>
          {items.map(({ route, text }) =>
            route !== EMPTY_ROUTE ? (
              <Route key={text} exact path={route} element={CMP_MAP[text]} />
            ) : (
              ''
            )
          )}
          <Route path="/" element={<Navigate to="page-1" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    )
  }
  return <h1>Loading...</h1>
}

Home.propTypes = {
  getConfigData: PropTypes.func.isRequired,
  mainConfig: PropTypes.object,
  error: PropTypes.bool,
}

Home.defaultProps = {
  error: false,
  mainConfig: {},
}

export default Home
