import React from 'react';
import { NavLink } from 'react-router-dom';
import Car from '../car/car'
import './nav.css';

export default (props) => {
  return(
    <nav className="nav"> 
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
      <Car inner={props.inner}/>
    </nav>
  )
}