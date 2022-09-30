import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {originalBalance: 2000}

  decerementAmt = value => {
    this.setState(prevState => ({
      originalBalance: prevState.originalBalance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {originalBalance} = this.state

    return (
      <div className="bg-container">
        <div className="withdrawal-container">
          <div className="top-container">
            <div className="circle">
              <h1 className="s-title">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="rupee-amt">{originalBalance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                value={eachDenomination.value}
                decerementAmt={this.decerementAmt}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
