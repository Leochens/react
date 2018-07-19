import React, { Component } from 'react';

import './App.css';

import MsgItemView from './components/MsgItem'
import WxHeaderView from './components/WxHeader'
import TabsView from './components/Tabs'
import TestView from './components/Test'
import PanelView from './components/Panel'

const dyh = require('./img/dyh.png')
const icon1 = require('./img/u1.jpg')
const icon2 = require('./img/u2.jpg')
const icon3 = require('./img/u3.jpg')


class App extends Component {

  constructor(props) {
    super(props)  

    this.state = {   
      messages: [
        {
          icon: dyh,
          title: "订阅号",
          description: "this is a test",
          time: "11:15",
        },
        {
          icon: icon1,
          title: "Leochens",
          description: "this is a test",
          time: "11:15",
        },
        {
          icon: icon2,
          title: "Bob",
          description: "this is a test",
          time: "11:15"
        },
        {
          icon: icon3,
          title: "tee",
          description: "this is a test",
          time: "11:15"
        }
      ], 
      addIsActive:false,
      willDelMsgs:[],
      willUpMsgs:[]
    }
  }
  unshiftMsg=(newTitle,newDescription,newTime)=>{
    const newMsgs = this.state.messages.slice();
    newMsgs.unshift({icon:icon2,title:newTitle,description:newDescription,time:newTime})
    this.setState({
      messages:newMsgs
    })
  }
  showAddPanel=()=>{
    this.setState({addIsActive:!this.state.addIsActive})
  }

  renderMsgs = () => {
    const messageViews = this.state.messages.map((item, id) => {
      return (
      <div key={id} onClick={this.renderDialog}>  
        <MsgItemView key={id} item={item} itemControl={this.showItemCtrlPanel}/>
      </div>)
    })
    return messageViews

  }
  render() {
    return (
      <div>
        <WxHeaderView onClick={this.showAddPanel}> </WxHeaderView>

        <section className="main">
          <ul className="list">
              {this.renderMsgs()}
          </ul>
        </section>


        <PanelView isActive={this.state.addIsActive} onClick={this.showAddPanel} unshiftMsg={this.unshiftMsg}></PanelView>
        <TabsView></TabsView>

      </div>
    );
  }
}

export default App;
