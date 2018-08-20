import React, { Component } from 'react';
import './Power.css';

export default class Power extends Component {
    state = {}

    getWinScore = winScoreLevel => {
      switch (winScoreLevel) {
        case 1: return 500;
        case 2: return 1000;
        case 3: return 2000;
        case 4: return 3000;
        case 5: return 5000;
        case 6: return 7000;
        case 7: return 10000;
        case 8: return 20000;
        default: return 500;
      }
    }

    render() {
      const {
        currentScore,
        level: winScoreLevel,
        actionIncreaseLevel,
        actionResetLevel
      } = this.props;
      if (currentScore === 0) {
        actionResetLevel && actionResetLevel();
      }
      const winScore = this.getWinScore(winScoreLevel);

      if (currentScore >= winScore) {
        // 奖励措施
        // alert(`你闯过了第${winScoreLevel}关`);
        actionIncreaseLevel && actionIncreaseLevel();
      }
      return (
        <div className="power-wrap">
          <div className="maxScore">{winScore}</div>
          <div
            style={{
              // backgroundColor: increaseNum > 16 ? '#FFD700' : null,
              height: ((currentScore / winScore) * 430)// 430是红条的高度
            }}
            className="power-content"
          />
        </div>
      );
    }
}
