import React, { Component } from 'react';
import './CheckBox.less';
export default class CheckBox extends Component {

  static defaultProps = {
    checked: false
  }

  onChange = () => {
    const { action } = this.props;
    action && action(true);
  }
  render() {
    return (
      <label className="checkbox">
        <input 
          checked={this.props.isChecked}
          onChange={this.onChange}
          type="checkbox" />
        <span className="single-check"></span>
        <span className="multi-check"></span>
      </label>
    );
  }
} 