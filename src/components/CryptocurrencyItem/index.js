// Write your JS code here
import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {currencyList} = this.props
    const {currencyLogo, currencyName, usdValue, euroValue} = currencyList
    console.log(currencyName, usdValue)
    return (
      <li className="crypto-container">
        <div className="logo-container">
          <img src={currencyLogo} alt={currencyName} className="crypto-image" />
          <p className="currency-text">{currencyName}</p>
        </div>
        <div className="text-container">
          <p className="currency-text">{usdValue}</p>
          <p className="currency-text">{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
