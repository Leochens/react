import React, { Component } from 'react';
import Increase from '../Increase/Increase';
import './Header.css';

export default class Header extends Component {
  state = {
  };

  render() {
    const {
      currentScore,
      increaseNum,
      restartAction,
      maxScore,
      level
    } = this.props;
    return (
      <div className="header-warper">
        <span className="title2048">
          2048
        </span>
        <span className="game-level">
          第
          {level}
          关
        </span>
        <div className="header-right">
          <div className="score">
            <span className="">
              历史最高分
              <br />
              {maxScore}
            </span>
          </div>
          <div className="score">
            <span className="">
              当前得分
              <br />
              {currentScore}
              <Increase
                increaseNum={increaseNum}
              />
            </span>
          </div>
        </div>
        <div className="btn-wraper">
          <button
            type="button"
            className="restart-btn"
            onClick={restartAction}
          >
            重新开始
          </button>
          <div className="readme-wrap">
            <div className="readme">移动端操作：滑动</div>
            <div className="readme">PC端操作：W A S D 或者 ↑ ↓ ← →</div>
          </div>
        </div>
      </div>
    );
  }
}
