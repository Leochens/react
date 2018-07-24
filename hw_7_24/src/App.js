import React, { Component } from 'react';
import './App.css';

import Header from './component/Header/Header';
import List from './component/List/List';
import Tabs from './component/Tabs/Tabs';
import { WX, TXL, FX, ME, DEFAULT_COLOR } from './constants'; //导入常量



class App extends Component {
  constructor() {
    super();
    console.log("2018.7.24作业");
    this.state = {
      titlesOrder: [
        {
          title: WX,
          colorsOrder: DEFAULT_COLOR
        },
        {
          title: TXL,
          colorsOrder: DEFAULT_COLOR
        },
        {
          title: FX,
          colorsOrder: DEFAULT_COLOR
        },
        {
          title: ME,
          colorsOrder: DEFAULT_COLOR
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
    });
  }
  handleSetTopItem = (id) => {

    let titlesOrder = this.state.titlesOrder.slice();
    const itemWillToTop = titlesOrder.splice(id, 1);
    titlesOrder.unshift(itemWillToTop[0]);


    this.setState({ titlesOrder });

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
          titlesOrder={this.state.titlesOrder} />

      </div>
    );
  }
}

export default App;
