import React from 'react';
import Nav from './components/nav/nav';
import CardCheck from './components/cardCheck/cardCheck';
const getDataCheck = JSON.parse(localStorage.getItem('CarData'));
const getCount = JSON.parse(localStorage.getItem('Count'));
let index = -1;
const f = getDataCheck.reduce((acomulador, piloto) => acomulador + piloto.price, 0);
console.log(f)


class listCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.Payment = this.Payment.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Delete() {
    getDataCheck.splice(index, 1);
    localStorage.setItem("CarData", JSON.stringify(getDataCheck));
  }

  Payment() {
    localStorage.removeItem('CarData');
    localStorage.removeItem('Count');
  }

  render() {
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
            getDataCheck.map(c => <CardCheck onClick={this.Delete} product={c} />)
          }
          <div className="wapper-total">
            <span className="sbTotal">Total</span>
            <span className="totalPrice">${f}</span>
          </div>
          <button className="check-btn" onClick={this.Payment}>Buy Now</button>
        </div>
      )
    }
  }
}



export default listCheck;
