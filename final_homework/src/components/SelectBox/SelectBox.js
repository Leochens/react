import React, { Component } from 'react';
import './SelectBox.less';
export default class SelectBox extends Component {
  state = {};

  handleCheck = e => {
    const {
      id,
      onCheck,
      data: {
        action
      }
    } = this.props;
    onCheck && onCheck(id);
    action && action();
  }
  render() {
    const { checked, data } = this.props;
    return (
        <label className="select-box">
            <input 
              checked={checked}
              type="radio"
              onChange={this.handleCheck}
              />
            <span className="radio">
            </span>
            <span className="text">{data.text}</span>
        </label>
    );
  }
}