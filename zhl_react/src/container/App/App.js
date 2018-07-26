import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as allActionCreators from '../../actions/itemControlAction';
import MsgList from '../../components/MsgList/MsgList'
import WxHeader from '../../components/WxHeader/WxHeader'
import AddPanel from '../../components/AddPanel/AddPanel'
import ItemPanel from '../../components/ItemPanel/ItemPanel'
import Tabs from '../../components/Tabs/Tabs'
import MultiDeleteButton from '../../components/MultiDeleteButton/MultiDeleteButton';

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
          multiDeleteIsActive={this.props.multiDeleteIsActive}
          allActions={this.props.allActions} 
          deleteQueue= {this.props.deleteQueue}/>
        <AddPanel
          addPanelIsActive={this.props.addPanelIsActive}
          allActions={this.props.allActions} />
        <ItemPanel
          itemPanelIsActive={this.props.itemPanelIsActive}
          currentItem={this.props.currentItem}
          allActions={this.props.allActions} />

        <MultiDeleteButton
          multiDeleteIsActive={this.props.multiDeleteIsActive}
          allActions={this.props.allActions}
        />
        <Tabs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addPanelIsActive: state.PanelReducer.addPanelIsActive,
    itemPanelIsActive: state.PanelReducer.itemPanelIsActive,
    multiDeleteIsActive: state.PanelReducer.multiDeleteIsActive,
    messages: state.itemControl.messages,
    currentItem: state.itemControl.currentItem,
    deleteQueue: state.itemControl.deleteQueue

  }
}
const mapDispatchToProps = dispatch => {
  return {
    allActions: bindActionCreators(allActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
