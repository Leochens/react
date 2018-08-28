import React, { Component } from 'react';
import './Tabs.less';

const Item = props => {
  const onClick = () => {
    const { id, onClick } = props;
    onClick && onClick(id);
  }
  const { icon, title, isActive } = props;
  return (
    <div
      className={`tab-item${isActive ? '-is-active' : ''}`}
      onClick={onClick}
    >
      <img src={isActive ? icon.active : icon.normal} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default class Tabs extends Component {
  state = {
    currentTabId: 1
  };

  componentWillMount() {
    this.setState({
      currentTabId: this.props.defaultActiveId
    });
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
        >
          {tabs.props.title}
        </div>
      );
    }

    return tabs.map(tab => (
      <Item
        key={`tab_${tab.props.id}`}
        id={tab.props.id}
        title={tab.props.title}
        icon={tab.props.icon}
        onClick={this.handleTabClick}
        isActive={tab.props.id === this.state.currentTabId}
      />));
  }

  renderCurrentTab = () => {
    const { children: tabs } = this.props;
    if (!tabs.length) {
      return tabs;
    }
    return tabs.filter(item => {
      return item.props.id === this.state.currentTabId;
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
