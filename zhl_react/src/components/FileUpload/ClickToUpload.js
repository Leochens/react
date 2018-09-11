import React, { Component } from 'react';
import './ClickToUpload.css';

export default class ClickToUpload extends Component {
  state = {
    fileName: ''
  };

  /**
   * 通过用户点击，创建<input type="file" accept="image/*"/>,
   * 并监听change事件获取file对象，
   */
  click = () => {

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.onchange = e => {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      this.setState({
        fileName: file.name
      })
    }
    input.click();
  }


  render() {
    return (
      <div
        className="main"
        onClick={this.click}>
        {this.state.fileName || '点击上传'}
      </div>
    );
  }
}