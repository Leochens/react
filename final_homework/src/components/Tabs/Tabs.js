import React, { Component } from 'react';
import './Tabs.less';
import './Tabs.less';
import TabItem from '../TabItem/TabItem';

export default class Tabs extends Component {
  state = {
    currentTab: 0
  };

  renderTabs = () => {
    const { children: tabs } = this.props;
    if (!tabs.length) {
      return (
        <div 
        className="tab-item"
        >{tabs.props.title}</div>
      )
    }
    return tabs.map(tab => (
      <div
        className="tab-item"
        key={`tab_${tab.props.id}`}
      >{tab.props.title}</div>
    ));
  }
  render() {
    return (
      <div className="tabs-wrapper">
        <div className="tabs">
          {this.renderTabs()}
        </div>
        {this.props.children}
      </div>
    );
  }
}