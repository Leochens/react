import React, { Component } from 'react';
import './TabItem.less';

export default class TabItem extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <div className="item">
        {children}
      </div>
    );
  }
}
