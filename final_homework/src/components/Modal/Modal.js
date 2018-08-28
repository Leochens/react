import React, { Component } from 'react';
import './Modal.less';
import * as TEXT from '../../contants/Text';

export default class Modal extends Component {
  state = {};

  static defaultProps = {
    type: 'message',
    content: TEXT.MODAL_DEFAULT_CONTENT,
    isActive: false,
    onOk: () => { },
    onCancel: () => { },

    inputTip: TEXT.MODAL_DEFAULT_CONTENT,
    onInputDone: () => { },
    defaultValue: '',
  }
  componentWillMount(){
    const { defaultValue } = this.props;
    if (this.props.type === 'input') {
      this.setState({
        inputValue: defaultValue
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    const { defaultValue } = nextProps;
    if (nextProps.type === 'input') {
      this.setState({
        inputValue: defaultValue
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
    const { inputValue } = this.state;
    const { onOk, onCancel, type, onInputDone } = this.props;
    if (type === 'message') {
      onOk && onOk();
    } else if (type === 'input') {
      onInputDone && onInputDone(inputValue);
    }

    onCancel && onCancel();
  }
  renderContent = () => {
    const { content, type, defaultValue, inputTip } = this.props;
    if (type === 'message') {
      return (
        <span>{content}</span>
      );
    } else if (type === 'input') {
      return (
        <div className="input-modal-wrap">
          <div className="input-tip">{inputTip}</div>
          <input
            onFocus={e => e.stopPropagation()}
            defaultValue={defaultValue}
            onChange={this.onInputChane} />
        </div>
      )
    }
    return null;
  }
  render() {

    return (
      <div
        className={this.getClassName()}
      >
        <div className="modal-wrapper">
          <div className="content">
            {this.renderContent()}
          </div>
          <div className="btns">
            <button
              className="btn btn-cancel"
              onClick={this.onCancel}>{TEXT.CANCEL}</button>
            <button
              className="btn btn-ok"
              onClick={this.onOk}
            >{TEXT.OK}</button>
          </div>
        </div>
      </div>
    );
  }
}