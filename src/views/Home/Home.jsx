import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Home = ({ getConfigData, mainConfig }) => {
  useEffect(() => {
    getConfigData()
  }, [getConfigData])

  return !mainConfig ? <h1>Home in Construction</h1> : <h1>Built</h1>
}

Home.propTypes = {
  getConfigData: PropTypes.func.isRequired,
  mainConfig: PropTypes.object,
}

Home.defaultProps = {
  mainConfig: {},
}

export default Home
