import React from 'react';
import './card.css'

function Card(props) {
  return(
    <div key={props.products.id}>
      <img className="card__img" src={props.products.image} alt={props.products.alt}></img>
      <h2 className="card__title">{props.products.title}</h2>
      <h4>{props.products.artist}</h4>
      <span className="card__price">${props.products.price}</span>
      <button className="card__btn">To Buy</button>
    </div>
  )
}

export default Card;