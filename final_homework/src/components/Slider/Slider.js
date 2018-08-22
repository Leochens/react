import React, { Component } from 'react';
import './Slider.less';
export default class Slider extends Component {
  state = {
    startX: 0,
    width: 0
  };

  handleTouchStart = e => {
    const { clientX } = e.touches[0];
    console.log("startX", clientX);
    this.setState({
      startX: clientX
    });
  }
  handleTouchMove = e => {
    const { clientX } = e.touches[0];
    console.log('curX', clientX);
    const diff = (clientX - this.state.startX);
    const percent = (diff / 300).toFixed(6) * 100;
    console.log('percent', percent);
    console.log('width', this.state.width);

    const currentPosition = Math.max(0, Math.min(
      this.state.startX + percent, 100));
    this.setState({
      width: currentPosition
    })
  }

  render() {
    return (
      <div className="slider-wrapper">
        <div
          style={{
            width: (this.state.width) + '%'
          }}
          className="slider-bar"
        ></div>
        <div
          style={{
            left: (this.state.width) + '%'
          }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          className="slider-ball"></div>
        {this.state.width}
      </div>
    );
  }
}