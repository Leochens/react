import React, { Component } from 'react';
import './App.css';

import Header from './component/Header/Header';
import List from './component/List/List';
import Tabs from './component/Tabs/Tabs';
import { DEFAULT_COLOR } from './constants'; //导入常量



class App extends Component {
  constructor() {
    super();
    console.log("2018.7.24作业");
    this.state = {
      titlesOrder: [
        {
          id:"wx",
          colorsOrder: DEFAULT_COLOR
        },
        {
          id:"txl",
          colorsOrder: DEFAULT_COLOR
        },
        {
          id:"fx",
          colorsOrder: DEFAULT_COLOR
        },
        {
          id:"me",
          colorsOrder: DEFAULT_COLOR
        },
      ],
      tabbarMap:{
        wx:DEFAULT_COLOR[0],
        txl:DEFAULT_COLOR[0],
        fx:DEFAULT_COLOR[0],
        me:DEFAULT_COLOR[0]
      }
    }
  }

  handleSetSpotfront = (itemid, spotid) => {

    const titlesOrder = this.state.titlesOrder.slice();
    const newOrder = titlesOrder[itemid].colorsOrder.slice();
    const front = newOrder.splice(spotid, 1);
    newOrder.unshift(front);

    titlesOrder[itemid].colorsOrder = newOrder;
    const itemWillToTop = titlesOrder.splice(itemid, 1);
    titlesOrder.unshift(itemWillToTop[0]);
    
    const tabbarMap ={};
    titlesOrder.forEach(item=>{
      tabbarMap[item.id]=item.colorsOrder[0];
    })

    this.setState({
      titlesOrder,tabbarMap
    });
  }
  render() {
    return (
      <div>
        <Header />


        <List
          onSetSpotfront={this.handleSetSpotfront}
          titlesOrder={this.state.titlesOrder} />

        <Tabs
          tabbarMap={this.state.tabbarMap} />

      </div>
    );
  }
}

export default App;
