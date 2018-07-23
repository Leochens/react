import React, { Component } from 'react';

import './App.css';
import ACTIONS from './constants'
import MsgItemView from './components/MsgItem'
import WxHeaderView from './components/WxHeader'
import TabsView from './components/Tabs'
import TestContainer from './container/TestContainer'
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
          icon: icon2,
          title: "小王",
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
      addIsActive: ACTIONS.HIDE_ALL_PANEL,

      delectDelIsActive: false
    }
  }
  handleAddNewItem = (item) => {
    const newMsgs = this.state.messages.slice();
    newMsgs.unshift({ icon: icon2, ...item })
    this.setState({
      messages: newMsgs
    })
  }
  showAddPanel = () => {
    this.setState({ addIsActive: ACTIONS.SHOW_ADD_PANEL })
  }
  handleClose = () => {
    this.setState({ addIsActive: ACTIONS.HIDE_ALL_PANEL })
  }
  renderMsgs = () => {
    const messageViews = this.state.messages.map((item, id) => {
      return (
        <div key={id} onClick={this.renderDialog}>
          <MsgItemView key={id} delectDelIsActive={this.state.delectDelIsActive}
            item={item} ref="msg"
            id={id}
            handleDelMsg={this.handleDelMsg}
            handleUpMsg={this.handleUpMsg}
            showRadios={this.showRadios} />
        </div>)
    })
    return messageViews

  }

  //删除
  handleDelMsg = (id) => {
    let newMsgs = this.state.messages;
    newMsgs.splice(id, 1)
    this.setState({ messages: newMsgs })
  }
  //置顶
  handleUpMsg = (item, id) => {
    const newMessages = this.state.messages.slice();
    newMessages.splice(id, 1)
    newMessages.unshift(item);
    this.setState({
      messages: newMessages
    })

  }

  delSelectItems = (ids) => {
    let oldMsgs = this.state.messages;
    let newMsgs = oldMsgs.filter((item, idx) => {
      return !(item.id in ids)
    });
    this.setState({ messages: newMsgs });
  }
  delSelectMsgs = (e) => {

    //
    let ids = [];
    const x = this.refs.msgList.getElementsByClassName("m_radio");
    for (let i = 0; i < x.length; i++) {
      // console.log(x[i].checked)
      if (x[i].checked) {
        console.log(x[i].id)
        ids.push(x[i].id)
      } else continue;
    }
    console.log(ids)
    this.delSelectItems(ids);

    this.showRadios();
  }

  renderDel = () => {
    if (this.state.delectDelIsActive) {
      return (
        <div className="select-del">
          <button className="btn" onClick={this.delSelectMsgs}>select del button</button>
          &nbsp;
          <button className="btn" onClick={this.showRadios}>cancle</button>
        </div>
      );
    } else return null;
  }

  showRadios = () => {
    this.setState({
      delectDelIsActive: !this.state.delectDelIsActive
    })
  }
  render() {
    return (
      <div>
        <WxHeaderView onClick={this.showAddPanel}> </WxHeaderView>
        <section className="main">
          <ul className="list" ref="msgList">

            {this.renderMsgs()}
          </ul>
        </section>
        <TestContainer />
        <PanelView
          isActive={this.state.addIsActive}
          close={this.handleClose}
          handleAddNewItem={this.handleAddNewItem} />

        {this.renderDel()}
        <TabsView></TabsView>
      </div>
    );
  }
}

export default App;
