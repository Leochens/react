import React, { Component } from 'react';
import './Increase.css';
import './animate.css';

export default class Increase extends Component {
    state = {
      animationList: [
        'bounceOutUp'
      ]
    }

    getAnimateClass = () => {
      const { increaseNum } = this.props;
      if (increaseNum !== 0) {
        return 'increase animated bounceInUp'; // + animationList[~~(Math.random() * animationList.length)]
      }
      return 'hide';
    }

    render() {
      const { increaseNum } = this.props;
      return (
        <div
          id="pp"
          className={this.getAnimateClass()}
        >
          +
          {increaseNum}
        </div>
      );
    }
}
