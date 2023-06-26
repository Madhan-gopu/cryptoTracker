// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="total-container">
          <div className="currency-type-container">
            <p className="text">Coin Type</p>
            <div className="currency-name-container">
              <p className="text">USD</p>
              <p className="text">EURO</p>
            </div>
          </div>

          <div className="crypto-item-container">
            {isLoading ? (
              <div data-testid="loader">
                <Loader
                  className="loader"
                  type="Rings"
                  color="#ffffff"
                  height={80}
                  width={80}
                />
              </div>
            ) : (
              currencyList.map(eachItem => (
                <CryptocurrencyItem key={eachItem.id} currencyList={eachItem} />
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
