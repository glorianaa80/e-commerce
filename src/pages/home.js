import React from 'react';
import CardDisc from '../render';
import Nav from '../components/nav/nav';
import ImgDeco from '../img/nav-mobile.png';
import '../css/home.css'


export default () => {
  return (
    <div className="App">
      <Nav />
      <div className="heroImage">
        <h1 className='title'>
          <span className="header__title-magas">Maga's</span>
          <span className="header__title-vinals">Vinals</span>
        </h1>
      </div>
      <div className="wapper">
        <span className="deco-img">Disco con cara de mujer afroamericana</span>
          <select className="select select-price" name="Price">
            <option value="Hide">Price</option>
            <option value="Cheap">Cheap</option>
            <option value="Expensive">Expensive</option>
          </select>
          <select className="select select-artist" name="Artist">
            <option value="Hide">Artist</option>
            <option value="Queen">Queen</option>
            <option value="The-Rolling-Stone">The Rolling Stone</option>
            <option value="Pink-Floyd">Pink Floyd</option>
            <option value="The-Beatles">The Beatles</option>
          </select>
      </div>
      <CardDisc />
    </div>
  );
}
