import React, { Component } from 'react';
import './Power.css';

export default class Power extends Component {
    state = {}

    render() {
      const winScore = 2000;
      const { currentScore } = this.props;
      if (currentScore >= winScore) {
        // 奖励措施
        alert('你赢了');
      }
      return (
        <div className="power-wrap">
          <div
            style={{
              // backgroundColor: increaseNum > 16 ? '#FFD700' : null,
              height: ((currentScore / winScore) * 500)
            }}
            className="power-content"
          />
        </div>
      );
    }
}
