import { connect } from 'react-redux'
import Configurator from './Configurator'
import { getConfiguratorData } from '../../redux/configurator/actions'

const mapStateToProps = ({ configurator: { config } }) => ({ config })
const mapDispatchToProps = {
  getConfiguratorData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Configurator)
