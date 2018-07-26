import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as allActionCreators from '../../actions/itemControlAction';
import MsgList from '../../components/MsgList/MsgList'
import WxHeader from '../../components/WxHeader/WxHeader'
import AddPanel from '../../components/AddPanel/AddPanel'
import ItemPanel from '../../components/ItemPanel/ItemPanel'
import Tabs from '../../components/Tabs/Tabs'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <WxHeader
          allActions={this.props.allActions} />
        <MsgList
          messages={this.props.messages}
          currentItem={this.props.currentItem}
          itemPanelIsActive={this.props.itemPanelIsActive}
          allActions={this.props.allActions} />
        <AddPanel
          addPanelIsActive={this.props.addPanelIsActive}
          allActions={this.props.allActions} />
        <ItemPanel
          itemPanelIsActive={this.props.itemPanelIsActive}
          currentItem={this.props.currentItem}
          allActions={this.props.allActions} /> 
        <Tabs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addPanelIsActive: state.PanelReducer.addPanelIsActive,
    itemPanelIsActive: state.PanelReducer.itemPanelIsActive,
    delectDelIsActive: state.PanelReducer.delectDelIsActive,
    messages: state.itemControl.messages,
    currentItem: state.itemControl.currentItem
  }
}
const mapDispatchToProps = dispatch => {
  return {
    allActions: bindActionCreators(allActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
