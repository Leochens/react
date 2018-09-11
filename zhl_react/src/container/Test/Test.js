import React, { Component } from 'react';
import './Test.css';
import ClickToUpload from '../../components/FileUpload/ClickToUpload';
import DragToUpload from '../../components/FileUpload/DragToUpload';

export default class Test extends Component {


  render() {
    return (
      <div
        className="main"
      >
        {/* <ClickToUpload /> */}
        <DragToUpload />
      </div>
    );
  }
}