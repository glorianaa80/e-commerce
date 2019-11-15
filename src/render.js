import React from 'react';
import Card from './components/card/card';
import Search from './components/search/search';
import json from './json/data.json';
const data = json.products;

class CardDisc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle : [],
      textSearch : ''
    }
    this.filtrado = this.filtrado.bind(this);
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

  render() {
    const arrayMatch = this.state.cardTitle;
    const arrayAll = data;
    return(
      <div>
        <Search value={this.state.text} onChange={this.filtrado} />
        {
          arrayMatch.length ? arrayMatch.map(c => <Card  product={c} />) : 
          arrayAll.map(c => <Card product={c} />)
        }
      </div>
    )
  }
}

export default CardDisc;
