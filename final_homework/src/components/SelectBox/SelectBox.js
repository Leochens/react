import React, { Component } from 'react';
import './SelectBox.less';

export default class SelectBox extends Component {
  state = {};

  static defaultProps = {
    checked: false
  }

  handleCheck = () => {
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
      <label
        className="select-box"
        // htmlFor="inp"  
      >
        <input
          id="inp"
          checked={checked}
          type="radio"
          onChange={this.handleCheck}
        />
        <span className="radio" />
        <span className="text">{data.text}</span>
      </label>
    );
  }
}
