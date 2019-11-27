import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div id={props.product.indice} className="modal-wapper" style={{
      display: props.show ? 'block' : 'none'
    }}>
      <div className="modal-header">
        <h3 className="info-header-title mrg">{props.product.title}</h3>
        <p className="info-header-art mrg">{props.product.artist}</p>
        <p className="info-header-code mrg"> Code: {props.product.code}</p>
        <p className="info-header-price mrg">${props.product.price}</p>
        <span className="close-modal-btn" onClick={props.close}>×</span>
      </div>
      <div className="modal-body">
        <img className="modal__img" src={props.product.image} alt={props.product.title} />
        <span className="line pdg">Date: </span>
        <span className="info">{props.product.date}</span>
        <div className="des">{props.product.description.map(j => {
            return <p>{j}</p>
          })}</div>
        <span className="line">Category : </span>
        <span className="info">{props.product.category}</span>
        <p className="line side1">Side 1</p>
        <ul>
          {props.product.side1.map(e => {
            return <li>{e}</li>
          })}
        </ul>
        <p className="line side2">Side 2</p>
        <ul>
          {props.product.side2.map(i => {
            return <li>{i}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Modal;
