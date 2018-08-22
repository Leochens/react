import React, { Component } from 'react';
import './Tabs.less';
import './Tabs.less';
// import TabItem from '../TabItem/TabItem';

export default class Tabs extends Component {
  state = {
    currentTabId: 1
  };

  componentWillMount() {
    this.setState({
      currentTabId: this.props.defaultActiveId
    })
  }
  handleTabClick = id => {
    this.setState({
      currentTabId: id
    });
  }
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
        onClick={() => this.handleTabClick(tab.props.id)}
      >{tab.props.title}</div>
    ));
  }
  renderCurrentTab = () => {
    const { children: tabs } = this.props;
    if (!tabs.length) {
      return tabs
    }
    return tabs.filter(item => {
      return item.props.id === this.state.currentTabId
    }).pop();
  }

  render() {
    return (
      <div>
        <div className="tabs-wrapper">
          <div className="tabs">
            {this.renderTabs()}
          </div>
        </div>
        <div>
          {this.renderCurrentTab()}
        </div>
      </div>

    );
  }
}