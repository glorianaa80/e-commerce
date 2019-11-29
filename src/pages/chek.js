import React from 'react';
import ListCheck from '../render-check';
import '../css/heroImage.css';
import '../css/checkout.css';
import '../render-home'



export default () => {
  return (
    <div>
      <div className="heroImage-check">
        <h1 className='title'>Maga's Vinals</h1>
      </div>
      <h2 className="title-check">Checkout</h2>

    <ListCheck/>
    </div>
  )
}