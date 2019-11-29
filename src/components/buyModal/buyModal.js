import React from 'react';

function BuyModal(props) {
  return (
    <div id={props.product.indice} className="modal-wapper" style={{
      display: props.show ? 'block' : 'none'
    }}>
      <form>
        <label>Title</label>
        <input type="text" onChange={e: onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ Title: e.target.value })}} />
            <label>Total</label>
        <input type="text" onChange={e: onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ Total: e.target.value })}}/>
            <CardElement />
        <button>Buy</button>
      </form>
    </div>
  )
}

export default BuyModal;
