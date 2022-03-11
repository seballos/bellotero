import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Configurator.styl'
import EstimatedCostItem from '../../components/EstimatedCostItem/EstimatedCostItem'

const configuratorSchema = [
  {
    title: 'Monthly ingredient spending',
    min: 10,
    max: 100,
    prefix: '$',
    valueKey: 'ingredientSpending',
  },
  {
    title: 'Full-time employees that process invoices',
    min: 1,
    max: 10,
    valueKey: 'fullTimeEmployees',
  },
]
const MONTLY_INGREDIENT_SPENDING_FACTOR = 0.3
const ANUAL_SAVINGS_FACTOR = 1337

const Configurator = ({ getConfiguratorData, config }) => {
  const [estimateValues, setEstimateValues] = useState({
    ingredientSpending: null,
    fullTimeEmployees: null,
  })
  const formatter = useRef(
    new Intl.NumberFormat('us-US', { maximumSignificantDigits: 2 })
  )
  const { estimateCostFoodSavings, estimateAnualSavings } = useMemo(() => {
    const { ingredientSpending, fullTimeEmployees } = estimateValues
    const estimateCostFoodSavings =
      ingredientSpending * MONTLY_INGREDIENT_SPENDING_FACTOR
    const estimateAnualSavings =
      estimateCostFoodSavings + fullTimeEmployees * ANUAL_SAVINGS_FACTOR
    return {
      estimateCostFoodSavings: formatter.current.format(
        estimateCostFoodSavings
      ),
      estimateAnualSavings: formatter.current.format(estimateAnualSavings),
    }
  }, [estimateValues])

  const handleChangeEstimateValue = useCallback((value, valueKey) => {
    setEstimateValues((currentState) => ({
      ...currentState,
      [valueKey]: value,
    }))
  }, [])

  const renderEstimateCostItem = (item) => (
    <EstimatedCostItem
      key={item.valueKey}
      onChangeValue={handleChangeEstimateValue}
      {...item}
    />
  )
  useEffect(() => {
    getConfiguratorData()
  }, [getConfiguratorData])

  if (Object.keys(config).length) {
    const { calculator } = config
    return (
      <main className="container">
        <div className="configurator">
          <div className="configurator__info">
            <h1 className="heading roboto-black--36">{calculator.title}</h1>
            <p className="roboto-regular--16">{calculator.description}</p>
          </div>
          <div className="configurator__estimated-section">
            {configuratorSchema.map(renderEstimateCostItem)}
            <section className="configurator__estimated-values">
              <section className="configurator__estimated-value">
                <span className="roboto-medium--72 configurator__result">
                  {estimateCostFoodSavings}
                </span>
                <span className="roboto-bold--14">
                  Estimated cost food savings
                </span>
              </section>
              <section className="configurator__estimated-value">
                <span className="roboto-medium--72 configurator__result">
                  {estimateAnualSavings}
                </span>
                <span className="roboto-bold--14">
                  Your estimated annual savings
                </span>
              </section>
            </section>
          </div>
        </div>
      </main>
    )
  }
  return null
}

Configurator.propTypes = {
  getConfiguratorData: PropTypes.func.isRequired,
  config: PropTypes.object,
}

Configurator.defaultProps = {
  config: {},
}

export default Configurator
