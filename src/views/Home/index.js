import { connect } from 'react-redux'
import { getConfigData } from '../../redux/main/actions'

import Home from './Home'
const mapStateToProps = ({ main: { mainConfig, error } }) => ({
  mainConfig,
  error,
})

const mapDispatchToProps = {
  getConfigData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
