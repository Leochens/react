import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/Header/Header'
import List from './component/List/List'
import Tabs from './component/Tabs/Tabs'


class App extends Component {
  constructor() {
    super();
    this.state = {
      titlesOrder: [
        {
          title: '微信',
          colorsOrder: ["red-spot",
            "blue-spot",
            "yellow-spot",
            "orange-spot"]
        },
        {
          title: '通讯录',
          colorsOrder: ["red-spot",
            "blue-spot",
            "yellow-spot",
            "orange-spot"]
        },
        {
          title: '发现',
          colorsOrder: ["red-spot",
            "blue-spot",
            "yellow-spot",
            "orange-spot"]
        },
        {
          title: '我',
          colorsOrder: ["red-spot",
            "blue-spot",
            "yellow-spot",
            "orange-spot"]
        },
      ]
    }
  }

  handleSetSpotfront = (itemid, spotid) => {
    const titlesOrder = this.state.titlesOrder.slice();
    const newOrder = titlesOrder[itemid].colorsOrder.slice();
    const front = newOrder.splice(spotid, 1);
    newOrder.unshift(front);
    titlesOrder[itemid].colorsOrder = newOrder;
    this.setState({
      titlesOrder
    })
  }
  handleSetTopItem = (id) => {
    console.log("list : " + id)
    let titlesOrder = this.state.titlesOrder.slice();
    const itemWillToTop = titlesOrder.splice(id, 1);
    titlesOrder.unshift(itemWillToTop[0]);
    console.log(titlesOrder)
    this.setState({ titlesOrder })
  }
  render() {
    return (
      <div>
        <Header />
        <List
          handleSetSpotfront={this.handleSetSpotfront}
          handleSetTopItem={this.handleSetTopItem}
          titlesOrder={this.state.titlesOrder} />
        <Tabs 
          titlesOrder={this.state.titlesOrder}
        />
      </div>
    );
  }
}

export default App;
