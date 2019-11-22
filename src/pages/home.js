import React from 'react';
import CardDisc from '../render-home';
import '../css/home.css';
import '../css/heroImage.css';
import data from '../json/data.json';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div className="App">
        <div className="heroImage">
          <h1 className='title'>
            <span className="header__title-magas">Maga's</span>
            <span className="header__title-vinals">Vinals</span>
          </h1>
        </div>
        <CardDisc />
      </div>
    )
  }
}

export default Home;
