import React, { Component } from 'react';
import './CheckBox.less';
export default class CheckBox extends Component {

  static defaultProps = {
    checked: false,
    type: 'single'
  }

  onChange = () => {
    const { action } = this.props;
    action && action(true);
  }
  renderSingleSelectCheckBox = () => {
    return (
      <label className="checkbox">
        <input
          checked={this.props.isChecked}
          onChange={this.onChange}
          type="checkbox" />
        <span className="single-check"></span>
      </label>
    );
  }

  renderMultipleSelectCheckBox = () => {
    const { order } = this.props;
    return (
      <label className="checkbox">
        <input
          checked={this.props.isChecked}
          onChange={this.onChange}
          type="checkbox" />
        <span className="multi-check">
          <span>
            {order ? order : null}
          </span>
        </span>
      </label>
    )
  }
  render() {
    const { type } = this.props;
    return type === 'single'
      ? this.renderSingleSelectCheckBox()
      : this.renderMultipleSelectCheckBox();
  }
} 