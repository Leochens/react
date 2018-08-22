import React, { Component } from 'react';
import './ListItem.less';
import CheckBox from '../CheckBox/CheckBox';

export default class ListItem extends Component {
  state = {};

  render() {
    const { data } = this.props;

    return (
      <div className="list-item">
        <span><CheckBox /></span>{data.name}
      </div>
    );
  }
}