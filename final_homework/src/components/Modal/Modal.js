import React, { Component } from 'react';
import './Modal.less';
export default class Modal extends Component {
  state = {};


  getClassName = () => {
    const { isActive } = this.props;
    return isActive ? 'modal-show' : 'modal-hide';
  }

  onCancel = () => {
    const { onCancel } = this.props;
    onCancel && onCancel();
  }

  onOk = () => {
    const { onOk } = this.props;
    onOk && onOk();
  }

  render() {
    const { message } = this.props;

    return (
      <div
        className={this.getClassName()}
        onClick={this.onCancel}>
        <div className="modal-wrapper">
          <div className="content">
            {message}
          </div>
          <div className="btns">
            <button
              className="btn btn-cancel"
              onClick={this.onCancel}>取消</button>
            <button
              className="btn btn-ok"
              onClick={this.onOk}
            >确定</button>
          </div>
        </div>
      </div>
    );
  }
}