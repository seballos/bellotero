import axiosApi from '../../config/axiosApi'
function getTestimonialData() {
  return axiosApi.get('page1.json').then(({ data }) => data)
}
export default { getTestimonialData }
