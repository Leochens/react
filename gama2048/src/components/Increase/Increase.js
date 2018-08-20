import React, { Component } from 'react';
import './Increase.css';
import './animate.css';

let trigger = 0;

export default class Increase extends Component {
  state = {
    animationClass: 'increase animated bounceInUp'
  }

  // 利用trigger触发器来实现动画连续执行
  componentWillReceiveProps(nextProps) {
    if (nextProps.increaseNum !== 0 && this.props.increaseNum !== 0) {
      this.setState({
        animationClass: trigger & 1 ? 'increase animated bounceInUp ' : 'increase animated bounceInUp2'
      });
      console.log('trigger', trigger);
      trigger++;
    } else if ((nextProps.increaseNum === 0 && this.props.increaseNum !== 0)
      || (nextProps.increaseNum === 0 && this.props.increaseNum === 0)) {
      this.setState({
        animationClass: 'hide'
      });
      trigger = 0;
    } else {
      this.setState({
        animationClass: 'increase animated bounceInUp'
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
