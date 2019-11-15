import React from 'react';
import Card from './components/card/card';
import Search from './components/search/search';
import json from './json/data.json';
const data = json.products;

class CardDisc extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName : [],
      textSearch : ''
    }
    this.filtrado = this.filtrado.bind(this);
  }


  filtrado(e) {
    const text = e.target.value;
    const newData = data.filter(function (item) {
      const itemData = item.name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })

    this.setState({
      cardName: newData,
      textSearch: text,
    })
  }

  render() {
    const arrayMatch = this.state.cardName;
    const arrayAll = data
    return(
      <div>
        <Search value={this.state.text} onChange={this.filtrado} />
        {
          arrayMatch.length ? arrayMatch.map(c => 
          <Card  card={c} />) : 
          arrayAll.map(c => <Card key={c}  products={c} />)
        }
      </div>
    )
  }
}

export default CardDisc;


