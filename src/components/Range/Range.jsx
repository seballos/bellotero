import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Range.styl'

const Range = ({ ...props }) => {
  const { min, max } = props
  const inputRef = useRef()
  const [isChanging, setIsChanging] = useState(false)

  const getPercent = useMemo(
    () => (value) => ((value - min) / (max - min)) * 100,
    [max, min]
  )

  const changeInputProgressPercentStyle = useCallback(() => {
    inputRef.current.style.setProperty(
      '--webkitProgressPercent',
      `${getPercent(inputRef.current.value)}%`
    )
  }, [getPercent])

  useEffect(() => {
    changeInputProgressPercentStyle()
    const inputElement = inputRef.current

    const handleUpAndLeave = () => setIsChanging(false)
    const handleDown = () => setIsChanging(true)

    inputElement.addEventListener('mousemove', changeInputProgressPercentStyle)
    inputElement.addEventListener('mousedown', handleDown)
    inputElement.addEventListener('mouseup', handleUpAndLeave)
    inputElement.addEventListener('mouseleave', handleUpAndLeave)
    return () => {
      inputElement.removeEventListener(
        'mousemove',
        changeInputProgressPercentStyle
      )
      inputElement.removeEventListener('mousedown', handleDown)
      inputElement.removeEventListener('mouseup', handleUpAndLeave)
      inputElement.removeEventListener('mouseleave', handleUpAndLeave)
    }
  }, [isChanging, changeInputProgressPercentStyle])

  useEffect(() => {
    changeInputProgressPercentStyle()
  }, [inputRef, changeInputProgressPercentStyle])
  return <input ref={inputRef} className="range" type="range" {...props} />
}

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default Range
