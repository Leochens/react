import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';

//容器
import MsgList from '../MsgList/MsgList'
import WxHeader from '../WxHeader/WxHeader'
import AddPanel from '../AddPanel/AddPanel'
import ItemPanel from '../ItemPanel/ItemPanel'

 //纯UI
import Tabs from '../../components/Tabs/Tabs'    

class App extends Component {
 
  render() {
    return (
      <div>
        <WxHeader/>
        <MsgList/>
        <AddPanel/>
        <ItemPanel/>
        <Tabs/>
      </div>
    );
  }
}


export default connect()(App);
