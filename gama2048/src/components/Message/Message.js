import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
  state = {}

  render() {
    const { msg } = this.props;
    return (
      <div className="message-wrapper">
        {msg}
      </div>
    );
  }
}
