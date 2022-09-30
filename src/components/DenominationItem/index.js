import './index.css'

const DenominationItem = props => {
  const {key, value, decerementAmt} = props

  const onClickAmt = () => {
    decerementAmt(value)
  }

  return (
    <li className="denomination-container">
      <button type="button" className="denomination" onClick={onClickAmt}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
