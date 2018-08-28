import React, { Component } from 'react';
import './TabItem.less';

export default class TabItem extends Component {
  state = {};

  render() {
    return (
      <div className="item">
        {this.props.children}
      </div>
    );
  }
}
