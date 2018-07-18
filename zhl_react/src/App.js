import React, { Component } from 'react';

import './App.css';

import MsgItemView from './MsgItem'
import WxHeaderView from './WxHeader'
import TabsView from './Tabs'
import DialogView from './Dialag'



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
        },
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
      ], show: "hidePanel"
    }
  }

  renderDialog = () => {

    if (this.state.show === 'hidePanel') {
      console.log(this.state.show)

      // this.state.show=false;    区别
      this.setState({ show: 'showPanel' })


    } else {
      console.log(this.state.show)
      // this.state.show=true;
      this.setState({ show: "hidePanel" })
    }
  }

  renderMsgs = () => {
    const messageViews = this.state.messages.map((item, id) => {
      return (
      <div key={id} onClick={this.renderDialog}>
        <MsgItemView key={id} item={item}/>
      </div>)
    })
    return messageViews

  }
  render() {
    return (
      <div>
        <WxHeaderView></WxHeaderView>

        <section className="main">
          <ul className="list">
              {this.renderMsgs()}
          </ul>
        </section>
        <div className={this.state.show}>
          <div className="panel" onClick={this.renderDialog}>
            <DialogView ></DialogView>
          </div>
        </div>

        <TabsView></TabsView>

      </div>
    );
  }
}

export default App;
