import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';



class BuyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      total: ''
    }
  }


  render() {
    return (
      <div id={props.product.indice} className="modal-wapper" style={{
        display: props.show ? 'block' : 'none'
      }}>
        <form>
          <label>Email</label>
          <input type="email" onChange={e: onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}} />
                  <label>Total</label>
          <input type="number" onChange={e: onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ total: e.target.value })}}/>
          <CardElement />
          <button>Buy</button>
        </form>
      </div>
    )
  }
}


export default BuyModal;
