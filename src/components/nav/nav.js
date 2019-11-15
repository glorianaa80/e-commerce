import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import NavImage from '../../img/shop.svg'

export default () => {
  return(
    <nav className="nav"> 
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
      <span>
        <img className="image-shop" src={NavImage} alt="" aria-hidden="true"/>
        <span className="value-products">0</span>
      </span>
    </nav>
  )
}