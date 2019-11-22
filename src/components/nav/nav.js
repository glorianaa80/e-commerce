import React from 'react';
import { NavLink } from 'react-router-dom';
import NavImage from '../../img/shop.svg';
import './nav.css';

export default (props) => {
  return(
    <nav className="nav"> 
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
      <span>
      <img className="image-shop" src={NavImage} alt="" aria-hidden="true" />
      <span className="value-products">{props.inner}</span>
    </span>
    </nav>
  )
}