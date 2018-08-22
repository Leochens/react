import React, { Component } from 'react';
import './TabItem.less';

export default class TabItem extends Component {
  state = {};


  render() {
    const { tabItemData } = this.props;

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}