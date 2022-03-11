import axiosApi from '../../config/axiosApi'
function getConfiguratorData() {
  return axiosApi.get('page2.json').then(({ data }) => data)
}
export default { getConfiguratorData }
