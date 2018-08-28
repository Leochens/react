import React, { Component } from 'react';
import './ToolBar.less';

const ToolItem = props => {
  const handleTap = () => {
    const { isActive, action } = props;
    isActive && action && action();
  };

  return (
    <div
      className="item"
      onClick={handleTap}
    >
      <div className="icon">
        <img src={props.icon} alt={props.title} />
      </div>
      <div
        style={{
          color: props.isActive ? '#333333' : null
        }}
        className="title"
      >
        {props.title}

      </div>
    </div>
  );
};

export default class ToolBar extends Component {
  state = {};

  renderTools = () => {
    const { tools } = this.props;
    return tools.map((item, idx) => (
      <ToolItem
        key={`tool_${idx}`}
        title={item.title}
        icon={item.isActive ? item.iconAc : item.icon}
        isActive={item.isActive}
        action={item.action}
      />
    ));
  }

  render() {
    return (
      <div className="tool-bar-wrapper">
        <div className="tool-bar">
          {this.renderTools()}
        </div>
      </div>
    );
  }
}
