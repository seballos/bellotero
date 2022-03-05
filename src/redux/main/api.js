import axiosApi from '../../config/axiosApi'
function getConfigData() {
  return axiosApi.get('app.json').then(({ data }) => data)
}
export default { getConfigData }
