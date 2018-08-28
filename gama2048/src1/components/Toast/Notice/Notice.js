import React, { Component } from 'react';
import './Notice.less';

export default class Notice extends Component {
  static defalutProps = {
    duration: 3000
  }

  state = {};

  componentDidMount = () => {
    if (this.props.duration > 0) {
      this.closeTimer = setTimeout(() => { this.close(); },
        this.props.duration);
    }
  }

  componentWillUnmount = () => {
    this.clearCloseTimer();
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  close = () => {
    const { onClose } = this.props;
    const that = this;
    this.clearCloseTimer();
    this.timer = setTimeout(() => {
      onClose && onClose();
      clearTimeout(that.timer);
    }, 300);
  }

  render() {
    return (
      <div className="notice-item">
        {this.props.content}
      </div>
    );
  }
}
