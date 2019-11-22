import React from 'react';
import Card from './components/card/card';
import Search from './components/search/search';
import json from './json/data.json';
import Nav from './components/nav/nav';
import Modal from './components/modal/modal';
const data = json.products;

class CardDisc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle : [],
      textSearch : '',
      count : 0,
      dataCar: [],
      isShowing: false
    }
    this.filtrado = this.filtrado.bind(this);
    this.Plus = this.Plus.bind(this);
    this.openModalHandler = this.openModalHandler.bind(this);
    this.closeModalHandler = this.closeModalHandler.bind(this);
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
    const car = data[e.target.id]
    const NewDataCar = this.state.dataCar;
    NewDataCar.push(car)
    this.setState({ 
      count: this.state.count + 1,
      dataCar : NewDataCar
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

  render() {
    const arrayMatch = this.state.cardTitle;
    const arrayAll = data;
    return(
      <div>
        <Nav inner={this.state.count} />
        <Search value={this.state.text} onChange={this.filtrado} />
        {
          arrayMatch.length ? arrayMatch.map(c => <Card  onClick={this.Plus} product={c} />) : 
          arrayAll.map(c => <Card onClick={this.Plus} product={c} />)
        }

        {
          arrayAll.map(c => <Modal className="modal" show={this.state.isShowing} close={this.closeModalHandler} product={c} />)
        }
      </div>
    )
  }
}

export default CardDisc;
