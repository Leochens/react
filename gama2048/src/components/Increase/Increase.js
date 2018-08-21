import React, { Component } from 'react';
import './Increase.css';
// 增加的分数

// 5 & 1 === 1 || 6 & 1 === 0 判断奇偶
let trigger = 0;
export default class Increase extends Component {
  state = {
    animationClass: 'increase animated fadeOutUp'
  }

  // 利用trigger标志位触发器来实现动画连续执行
  componentWillReceiveProps(nextProps) {
    if (nextProps.increaseNum !== 0 && this.props.increaseNum !== 0) {
      this.setState({
        animationClass: trigger & 1 ? 'increase animated fadeOutUp ' : 'increase animated fadeOutUp2'
      });
      trigger++;
    } else if ((nextProps.increaseNum === 0 && this.props.increaseNum !== 0)
      || (nextProps.increaseNum === 0 && this.props.increaseNum === 0)) {
      this.setState({
        animationClass: 'hide'
      });
      trigger = 0;
    } else {
      this.setState({
        animationClass: 'increase animated fadeOutUp'
      });
      trigger = 0;
    }
  }

  render() {
    const { increaseNum } = this.props;
    return (
      <div
        className={this.state.animationClass}
      >
        +
        {increaseNum}
      </div>
    );
  }
}
