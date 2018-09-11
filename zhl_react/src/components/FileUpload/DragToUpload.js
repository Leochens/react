import React, { Component } from 'react';
import './DragToUpload.css';

export default class DragToUpload extends Component {
  state = {
    fileName: ''
  };


  dragover = event => {
    event.preventDefault()
  }

  drop = event => {
    event.preventDefault()
    let files = event.dataTransfer.files;
    console.log(files[0]);
    this.setState({
      fileName: files[0].name
    })
  }

  // showClipBoardData = e => {
  //   console.log(e.clipboardData.files[0]);
  // }

  render() {
    return (
      <div
        className="main"
        onDragOver={this.dragover}
        onDrop={this.drop}
        // onPaste={this.showClipBoardData}
      >
        {this.state.fileName || '拖拽上传'}
      </div>
    );
  }
}