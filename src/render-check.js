import React from 'react';
import json from './json/data.json';
import Nav from './components/nav/nav';
const data = json.products;

class listCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      dataCar: [],
    }
    this.Plus = this.Plus.bind(this);
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

  render() {
    return(
      <div>
        <Nav inner={this.state.count} />
      </div>
    )
  }
}

export default listCheck;
