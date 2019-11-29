import React from 'react';
import Card from './components/card/card';
import Search from './components/search/search';
import json from './json/data.json';
import Nav from './components/nav/nav';
import './css/sort.css';
import DecoImage from './img/decoImg.png';
const data = json.products;

const getCount = JSON.parse(localStorage.getItem('Count'));


class CardDisc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: json.products,
      cardTitle: [],
      data: [],
      textSearch: '',
      count: 0,
      dataCar: [],
      isOldesFirst: true,
      isShowing: false,
    }
    this.filtrado = this.filtrado.bind(this);
    this.Plus = this.Plus.bind(this);
    this.openModalHandler = this.openModalHandler.bind(this);
    this.closeModalHandler = this.closeModalHandler.bind(this);
    this.sortPrice = this.sortPrice.bind(this);
    this.togglePrice = this.togglePrice.bind(this);
    this.toggleArtis = this.toggleArtis.bind(this);
  }

  filtrado(e) {
    const text = e.target.value;
    const newData = data.filter(function (item) {
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      cardTitle: newData,
      textSearch: text,
    })
  }

  Plus = (e) => {
    const car = data[e.target.id];
    let NewDataCar = this.state.dataCar;
    NewDataCar.push(car);
    localStorage.setItem('CarData', JSON.stringify(NewDataCar));
    const totalCount = this.state.count + 1;
    localStorage.setItem('Count', JSON.stringify(totalCount));
    this.setState({
      count: totalCount,
      dataCar: NewDataCar
    })
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  sortPrice() {
    let newDataSort = data;
    if (this.state.isOldesFirst) {
      newDataSort = newDataSort.sort((a, b) => a.price - b.price).reverse()
    } else {
      newDataSort = newDataSort.sort((a, b) => b.price - a.price).reverse()
    }
    this.setState({
      isOldesFirst: !this.state.isOldesFirst,
      dataSort: newDataSort
    })
  }
  togglePrice() {
    this.sortPrice()
  }

  toggleArtis(){
    let newDataSortArtis = data;
    newDataSortArtis.sort((a,b) => a.artist.localeCompare(b.artist));
    this.setState({
      isOldesFirst: !this.state.isOldesFirst,
      dataSort: newDataSortArtis
    })
  }

  render() {
    const arrayMatch = this.state.cardTitle;
    const arrayAll = data;
    return (
      <div>
        <div className="wapper">
          <img className="deco-img" src={DecoImage} alt="" aria-hidden="true"/>
          <button className="select select-price" onClick={this.togglePrice}>Price</button>
          <button className="select select-artist" onClick={this.toggleArtis} >Artist</button>
        </div>
        <Nav inner={getCount}/>
        <Search value={this.state.text} onChange={this.filtrado} />
        {
          arrayMatch.length ? arrayMatch.map(c => <Card showModal={this.openModalHandler} onClick={this.Plus} product={c} />) :
            arrayAll.map(c => <Card showModal={this.openModalHandler} onClick={this.Plus} product={c} close={this.closeModalHandler} show={this.state.isShowing} />)
        }
      </div>
    )
  }
}

export default CardDisc;
