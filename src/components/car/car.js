import React from 'react';
import NavImage from '../../img/shop.svg';
import './car.css';

export default (props) => {
  return (
    <span>
      <img className="image-shop" src={NavImage} alt="" aria-hidden="true" />
      <span className="value-products">{props.inner}</span>
    </span>
  )
}