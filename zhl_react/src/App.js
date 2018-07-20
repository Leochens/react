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
          id:0,
          icon: dyh,
          title: "订阅号",
          description: "this is a test",
          time: "11:15",
        },
        {
          id:1,
          icon: icon2,
          title: "小王",
          description: "this is a test",
          time: "11:15",
        },
        {
          id:2,
          icon: icon1,
          title: "Leochens",
          description: "this is a test",
          time: "11:15",
        },
        {
          id:3,
          icon: icon2,
          title: "Bob",
          description: "this is a test",
          time: "11:15"
        },
        {
          id:4,
          icon: icon3,
          title: "tee",
          description: "this is a test",
          time: "11:15"
        }
      ], 
      willUpMsgs:[{
        id:5,
        icon: icon3,
        title: "teesdd",
        description: "this is a test",
        time: "11:15"
      }],
      addIsActive:false,
      delectDelIsActive:false
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
        <MsgItemView key={id}  delectDelIsActive={this.state.delectDelIsActive}
        item={item}  ref="msg"
        delMsg={this.delMsg} 
        upMsg={this.upMsg}
        showRadios={this.showRadios}/>
      </div>)
    })
    return messageViews

  }
  renderUpMsg=()=>{
    const upMsgs = this.state.willUpMsgs.map((item, id) => {
      return (
      <div key={id} onClick={this.renderDialog}>   
        <MsgItemView isUp={true} delectDelIsActive={this.state.delectDelIsActive}
        key={id}  ref="msg"
        item={item} 
        delMsg={this.delMsg} 
        upMsg={this.upMsg}
        showRadios={this.showRadios}/>
      </div>)
    })
    return upMsgs;
  }
  delMsg=(id)=>{
    console.log("delMsg in App"); 
    let newMsgs = this.state.messages;
    newMsgs = newMsgs.filter((item,idx)=>{
        // console.log("调用filter 删除id="+id);
        return item.id!=id;
    })
    // console.log("------------------------------");
    // console.log(newMsgs);
    // console.log("------------------------------");

    this.setState({messages:newMsgs})
    console.log("delete complited"); 
  }
  upMsg=(id)=>{
    console.log("upMsg in App");
    console.log(id) ;
    console.log("找到id="+id+"的item ");
    const willUpMsgItem = this.state.messages.filter((item,idx)=>{
      return id===item.id;
    });
    
    console.log("筛选后的item:");
    console.log(willUpMsgItem);
    console.log("放入待置顶数组");

    let oldUpItems = this.state.willUpMsgs.slice();
    const newUpItems=willUpMsgItem.concat(oldUpItems);  //连接
    this.setState({
      willUpMsgs:newUpItems
    })
    // this.state.willUpMsgs.push(willUpMsgItem);
    console.log("删除原来数组中的它")
    this.delMsg(id);
  }
  delSelectItems=(ids)=>{
    let oldMsgs = this.state.messages;
    let newMsgs = oldMsgs.filter((item,idx)=>{
      return !(item.id in ids)
    });
    this.setState({messages:newMsgs});
  }
  delSelectMsgs=(e)=>{

    //
    let ids= [];
    const x = this.refs.msgList.getElementsByClassName("m_radio");
    for(let i=0;i<x.length;i++)
    {
      // console.log(x[i].checked)
      if(x[i].checked)
      {
        console.log(x[i].id)
        ids.push(x[i].id)
      }else continue;
    }
    console.log(ids)
    this.delSelectItems(ids);
   
    this.showRadios();  
  }

  renderDel=()=>{
    if(this.state.delectDelIsActive)
    {
      return(
        <div className="select-del">
          <button className="btn" onClick={this.delSelectMsgs}>select del button</button>
          &nbsp;
          <button className="btn" onClick={this.showRadios}>cancle</button>
        </div>
      );
    }else return null;
  }

  showRadios=()=>{
    this.setState({
      delectDelIsActive:!this.state.delectDelIsActive
    })
  }
  render() {
    return (
      <div>
        <WxHeaderView onClick={this.showAddPanel}> </WxHeaderView>

        <section className="main">
          <ul className="list" ref="msgList">
              {this.renderUpMsg()}
              {this.renderMsgs()}
          </ul>
        </section>

     
        <PanelView isActive={this.state.addIsActive} onClick={this.showAddPanel} unshiftMsg={this.unshiftMsg}></PanelView>

        {this.renderDel()}

        <TabsView></TabsView>
      </div>
    );
  }
}

export default App;
