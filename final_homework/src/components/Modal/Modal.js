import React, { Component } from 'react';
import './Modal.less';
export default class Modal extends Component {
  state = {};

  static defaultProps = {
    type: 'message',
    content: '无描述',
    isActive: false,
    onOk: () => { },
    onCancel: () => { },

    inputTip: '无描述',
    onInputDone: () => { },
    defaultValue: '',
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.type === 'input') {
      this.setState({
        inputValue: ''
      })
    }
  }
  onInputChane = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  getClassName = () => {
    const { isActive } = this.props;
    return isActive ? 'modal-show' : 'modal-hide';
  }

  onCancel = (e) => {
    e.stopPropagation();
    const { onCancel } = this.props;
    onCancel && onCancel();
  }

  onOk = (e) => {
    e.stopPropagation();
    const { onOk, onCancel, type, onInputDone } = this.props;
    if (type === 'message') {
      onOk && onOk();
    } else if (type === 'input') {
      onInputDone && onInputDone(this.state.inputValue);
    }

    onCancel && onCancel();
  }
  renderContent = () => {
    const { content, type, defaultValue, inputTip } = this.props;
    if (type === 'message') {
      return (
        <span>{ content }</span>
      );
    } else if (type === 'input') {
      return (
        <div className="">
          <div className="input-tip">{inputTip}</div>
          <input
          onFocus={e => e.stopPropagation()} 
          defaultValue={defaultValue}
           onChange={this.onInputChane}/>
        </div>
      )
    }
    return null;
  }
  render() {

    return (
      <div
        className={this.getClassName()}
        // onClick={this.onCancel}
      >
        <div className="modal-wrapper">
          <div className="content">
            {this.renderContent()}
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