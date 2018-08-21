import React from 'react';
import Increase from '../Increase/Increase';
import './Header.css';
// 头部信息 包括使用说明重新开始按钮 以及当前关卡

const Header = props => (
  <div className="header-warper">
    <span className="title2048">
      2048
    </span>
    <span className="game-level">
      第
      {props.level}
      关
    </span>
    <div className="header-right">
      <div className="score">
        <span className="">
          历史最高分
          <br />
          {props.maxScore}
        </span>
      </div>
      <div className="score">
        <span className="">
          当前得分
          <br />
          {props.currentScore}
          <Increase
            increaseNum={props.increaseNum}
          />
        </span>
      </div>
    </div>
    <div className="btn-wraper">
      <button
        type="button"
        className="restart-btn"
        onClick={props.restartAction}
      >
        重新开始
      </button>
      <div className="readme-wrap">
        <div className="readme">移动端操作：滑动</div>
        <div className="readme">PC端操作：W A S D 或者 ↑ ↓ ← →</div>
        <div className="readme">道具:炸弹，可以随机炸掉0~3个方块,双刃剑哦~</div>
      </div>
    </div>
  </div>
);
export default Header;
