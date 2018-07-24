import React, { Component } from 'react';
import {connect} from 'react-redux'

import MsgList from '../container/MsgList'
import WxHeaderView from '../components/WxHeader'
import TabsView from '../components/Tabs'
import TestContainer from '../container/TestContainer'
import AddPanel from '../container/AddPanel'

import '../App.css';

class App extends Component {
 
  render() {
    return (
      <div>
        <WxHeaderView/>
        <MsgList/>
        <AddPanel/>
        <TestContainer />
        <TabsView/>
      </div>
    );
  }
}


export default connect()(App);
