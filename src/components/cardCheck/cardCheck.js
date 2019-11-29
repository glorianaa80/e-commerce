import React from 'react';
import './cardCheck.css';

function CardCheck(props) {

  return (
    <div id={props.product.id} className="wapper-cardCheck" key={props.product.id}>
      <img id={props.product.indice} className="cardCheck__img" src={props.product.image} alt={props.product.title} />
      <div className ="wapper-titles">
        <h2 className="cardCheck__title">{props.product.title}</h2>
        <h4 className="cardCheck__sdTitle">{props.product.artist}</h4>
        <p className="cardCheck__code">Code: {props.product.code}</p>
      </div>
      <div className="wapper-price">
        <p className="cardCheck__price">${props.product.price}</p>
        <button id={props.product.indice} onClick={props.onClick} className="cardCheck__btn">Remove
        </button>
      </div>
    </div>
  )
}

export default CardCheck;