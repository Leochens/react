import React, { Component } from 'react';
import './Navigator.less';
import returnIcon from '../../resource/images/return.png'

export default class Navigator extends Component {
  state = {};

  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav">
          <div className="left">
            <img src={returnIcon} />
            <span>制作影集</span>
          </div>
          <div className="title">{this.props.children}</div>
          <div className="right">
            <span>完成</span>
          </div>
        </div>
      </div>
    );
  }
}


