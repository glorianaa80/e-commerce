import React from 'react';
import ListCheck from '../render-check';
import '../css/heroImage.css';
import '../css/checkout.css';
import '../render-home'


export default () => {
  return (
    <div>
      <div className="heroImage-check">
        <h1 className='title'>
          <span className="header__title-magas">Maga's</span>
          <span className="header__title-vinals">Vinals</span>
        </h1>
      </div>
      <h2 className="title-check">Checkout</h2>
    <ListCheck/>

      <button className="check-btn">Buy Now</button>
    </div>
  )
}