import React, { Component } from 'react';
import './App.css';

import MsgItemView from './MsgItem'
import WxHeaderView from './WxHeader'
import TabsView from './Tabs'
import DialogView from './Dialag'
import TestView from './Test'


const dyh = require('./img/dyh.png')
const icon1 = require('./img/u1.jpg')
const icon2 = require('./img/u2.jpg')
const icon3 = require('./img/u3.jpg')


class App extends Component {

  constructor(props){//Note
    super(props)  //Note

    this.state = {   //Note
      messages : [
        { 
          icon: dyh,
          title:"订阅号",
          description:"this is a test",
          time:"11:15",
        },
       { 
        icon: icon1,
        title:"Leochens",
        description:"this is a test",
        time:"11:15",
      },
        { 
        icon: icon2,
        title:"Bob",
        description:"this is a test",
        time:"11:15"
      },
        { 
        icon: icon3,
        title:"tee",
        description:"this is a test",
        time:"11:15"
      }
      ],
      d_show:true
    }
    

  }

  renderDialog =()=>{
    console.log("jjjjj")
    if(this.state.d_show)
    {
      this.state.d_show=false
      return <DialogView></DialogView>

    }else{
      this.state.d_show=true

    }

  }
  renderMsgs=()=>{
   const messageViews =  this.state.messages.map((item,id)=>{
          return <MsgItemView key={id} item={item} onClick={this.renderDialog}/>
    })
    return messageViews
  }


  render() {
    return (
      <div onClick={this.renderDialog}>     
        <WxHeaderView></WxHeaderView>
        <section className="main">
          <ul className="list">
              {this.renderMsgs()}
          </ul>
        </section>
      
        {this.renderDialog}
        <TabsView></TabsView>

      </div>
    );
  }
}

export default App;
