import React from 'react';
import './card.css';
import Disc from '../../img/disc.png'

function Card(props) {
  return(
    <div className="wapper-card" id={props.product.id} key={props.product.id}>
      <img className="card__img" src={props.product.image} alt={props.product.title} />
      <h2 className="card__title">{props.product.title}</h2>
      <h4 className="card__sdTitle">{props.product.artist}</h4>
      <p className="card__price">${props.product.price}</p>
      <button className="card__btn">To Buy 
        <img className="btn__img" src={Disc} alt="" aria-hidden="true"/>
      </button>
    </div>
  )
}

export default Card;