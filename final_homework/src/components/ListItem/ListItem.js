import React, { Component } from 'react';
import './ListItem.less';
export default class ListItem extends Component {
  state = {};

  render() {
    const { data } = this.props;

    return (
      <div className="list-item">
        {data.name}
      </div>
    );
  }
}