import React from 'react';
import './card.css';
import '../nav/nav';
import Modal from '../modal/modal';
import Disc from '../../img/disc.png'

function Card(props) {

  return(
    <div id={props.product.id} className="wapper-card" key={props.product.id}>
        <Modal close={props.close} show={props.show} product={props.product}/>
      <button className="img__btn" onClick={props.showModal}>
        <img id={props.product.indice}  className="card__img" src={props.product.image} alt={props.product.title} />
      </button>
      <h2 className="card__title">{props.product.title}</h2>
      <h4 className="card__sdTitle">{props.product.artist}</h4>
      <p className="card__price">${props.product.price}</p>
      <button id={props.product.indice} className="card__btn" onClick={props.onClick}> Add to bag
      <img className="btn__img" src={Disc} alt="" aria-hidden="true"/>
      </button>
    </div>
  )
}

export default Card;