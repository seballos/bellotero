import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Reviews from '../../components/Reviews'

const Testimonial = ({ getTestimonialData, config }) => {
  useEffect(() => {
    getTestimonialData()
  }, [getTestimonialData])

  if (Object.keys(config).length) {
    const { slider } = config
    return (
      <main className="container">
        <h1 className="heading roboto-black--36">{slider.title}</h1>
        <Reviews config={slider.reviews} />
      </main>
    )
  }
  return null
}

Testimonial.propTypes = {
  config: PropTypes.shape({
    slider: PropTypes.object,
  }),
  getTestimonialData: PropTypes.func.isRequired,
}

Testimonial.defaultProps = {
  config: {},
}

export default Testimonial
