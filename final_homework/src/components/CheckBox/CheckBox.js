import React, { Component } from 'react';
import './CheckBox.less';
export default class CheckBox extends Component {
  state = {};

  render() {
    return (
      <label className="checkbox">
        <input type="checkbox"/>
        <span className="single-check"></span>
        <span className="multi-check"></span>
      </label>
    );
  }
} 