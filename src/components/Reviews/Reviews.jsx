import PropTypes from 'prop-types'
import { useCallback, useState } from 'react'
import './Reviews.styl'
import Button from '../Button'
import Arrow from '../../assets/images/arrow.svg'

const INITIAL_SLIDE_INDEX = 0

const Reviews = ({ config }) => {
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE_INDEX)
  const renderReview = ({ name, position, comment }) => {
    return (
      <li key={comment} className="reviews__slider__item">
        <section className="reviews__info">
          <h2 className="reviews__info__name roboto-bold--32">{name}</h2>
          <span className="reviews__info__position roboto-regular--14">
            {position}
          </span>
        </section>
        <p className="reviews__review roboto-bold--24">{comment}</p>
      </li>
    )
  }

  const handleTransition = useCallback(
    (value) => {
      if (value < 0) {
        setCurrentSlide(config.length - 1)
      } else if (value >= config.length) {
        setCurrentSlide(INITIAL_SLIDE_INDEX)
      } else {
        setCurrentSlide(value)
      }
    },
    [config.length]
  )

  return (
    <section className="reviews">
      <section className="reviews__slides">
        <ul
          className="reviews__slider"
          style={{ transform: `translate(${currentSlide * -100}%)` }}
        >
          {config.map(renderReview)}
        </ul>
      </section>
      <div className="reviews__controls">
        <span aria-label="current-slide" className="reviews__counter">
          {`${currentSlide + 1}/${config.length}`}
        </span>
        <Button onClick={() => handleTransition(currentSlide - 1)}>
          <Arrow />
        </Button>
        <Button
          className="reviews__button--right"
          onClick={() => handleTransition(currentSlide + 1)}
        >
          <Arrow />
        </Button>
      </div>
    </section>
  )
}

Reviews.propTypes = {
  config: PropTypes.arrayOf(PropTypes.object),
}

export default Reviews
