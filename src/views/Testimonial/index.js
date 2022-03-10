import { connect } from 'react-redux'
import { getTestimonialData } from '../../redux/testimonial/actions'
import Testimonial from './Testimonial'

const mapStateToProps = ({ testimonial: { config } }) => ({ config })
const mapDispatchToProps = {
  getTestimonialData,
}
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial)
