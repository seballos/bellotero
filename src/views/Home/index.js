import { connect } from 'react-redux'
import { getConfigData } from '../../redux/main/actions'

import Home from './Home'
const mapStateToProps = ({ main: { mainConfig } }) => ({
  mainConfig,
})

const mapDispatchToProps = {
  getConfigData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
