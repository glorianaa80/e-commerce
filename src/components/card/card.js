import React from 'react';
import './card.css';
import Disc from '../../img/disc.png'

function Card(props) {
  return(
    <div className="wapper-card" key={props.products.id}>
      <img className="card__img" src={props.products.image} alt={props.products.alt}></img>
      <h2 className="card__title">{props.products.title}</h2>
      <h4 className="card__sdTitle">{props.products.artist}</h4>
      <p className="card__price">${props.products.price}</p>
      <button className="card__btn">
        To Buy 
        <img src={Disc} alt="" aria-hidden="true"/>
      </button>
    </div>
  )
}

export default Card;