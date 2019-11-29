import React from 'react';
import Nav from './components/nav/nav';
import CardCheck from './components/cardCheck/cardCheck';
const getDataCheck = JSON.parse(localStorage.getItem('CarData'));
const getCount = JSON.parse(localStorage.getItem('Count'));
let index = -1;
let count = 0

class listCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      data: getCount
    }
    this.totalBuy = this.totalBuy.bind(this);
    this.Payment = this.Payment.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  totalBuy() {
    const result = getDataCheck.reduce((sum, { price }) => sum + price, 0)
    console.log(result)
    this.setState({
      total: result
    })
    console.log(result)
    console.log(getDataCheck)
  }

  Delete() {
    getDataCheck.splice(index, 1);
    localStorage.setItem("CarData", JSON.stringify(getDataCheck));
    getCount.splice(count, 1);
    localStorage.setItem("CarData", JSON.stringify(getCount));
  }

  updateLocalStorageWithState() {
    localStorage.setItem('localStorageCar', JSON.stringify(this.state.data));
  }

  Payment() {
    localStorage.removeItem('CarData');
    localStorage.removeItem('Count');
  }
  render() {
    const arrayCar = this.state.data;
    const arrayAll = getDataCheck;
    if (getDataCheck === null) {
      return (
        <React.Fragment>
          <Nav inner={getCount} />
          <p className="nullData">You have not added anything to the bag</p>
        </React.Fragment>
      )
    } else {
      return (
        <div>
          <Nav inner={getCount} />
          {
            arrayCar.length ? arrayCar.map(c => <CardCheck onClick={this.Delete} product={c} />) :
              arrayAll.map(c => <CardCheck onClick={this.Delete} product={c} />)
          }
          {/* {
            getDataCheck.map(c => <CardCheck onClick={this.Delete} product={c} />)
          } */}
          <div className="wapper-total">
            <span className="sbTotal">Total</span>
            <span className="totalPrice">${this.state.total}</span>
          </div>
          <button className="check-btn" onClick={this.Payment}>Buy Now</button>
        </div>
      )
    }
  }
}



export default listCheck;
