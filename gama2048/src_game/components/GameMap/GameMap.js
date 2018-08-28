import React, { Component } from 'react';
import tools from '../../tools';

import Square from '../Square/Square';
import Power from '../Power/Power';
import Props from '../Props/Props';
import './GameMap.css';

// 游戏地图
export default class GameMap extends Component {
  state = {
    startX: 0,
    startY: 0
  };

  componentDidMount() {
    const { Actions } = this.props;
    Actions.actionInitSquareMap();
  }

  // 键盘事件 w a s d 和 方向键上下左右
  handleKeyDown = e => {
    const {
      Actions: {
        actionMoveByDirections
      }
    } = this.props;
    switch (e.keyCode) {
      case 65:
      case 37:
        return actionMoveByDirections('left');
      case 87:
      case 38:
        return actionMoveByDirections('up');
      case 68:
      case 39:
        return actionMoveByDirections('right');
      case 83:
      case 40:
        return actionMoveByDirections('down');
      default: return null;
    }
  }

  // 触屏事件
  handleTouchStart = e => {
    this.setState({
      startX: e.touches[0].pageX,
      startY: e.touches[0].pageY
    });
  }

  // 触屏事件
  handleTouchEnd = e => {
    const {
      Actions: {
        actionMoveByDirections
      }
    } = this.props;

    const { pageX, pageY } = e.changedTouches[0];
    const distanceX = pageX - this.state.startX;
    const distanceY = pageY - this.state.startY;
    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      if (distanceX > 0) {
        actionMoveByDirections('right');
      } else {
        actionMoveByDirections('left');
      }
    } else if (Math.abs(distanceX) < Math.abs(distanceY)) {
      if (distanceY > 0) {
        actionMoveByDirections('down');
      } else {
        actionMoveByDirections('up');
      }
    }
  }

  renderGameArea = () => {
    const {
      squareMap,
      newPos,
      changedSquares
    } = this.props;
    return squareMap.map((row, rowId) => (
      <div key={rowId}>
        {
          row.map((squareNum, colId) => (
            <Square
              // 判断是否是新的方格
              isNew={(newPos.row === rowId && newPos.col === colId)}
              isChange={changedSquares.includes(tools.transformPosToNum(rowId, colId))}
              key={colId}
              num={squareNum}
            />
          ))
        }
      </div>
    ));
  }

  // 绑定文档事件 页面一加载就能响应键盘事件和触摸事件
  bindDocumentActions = () => {
    document.onkeydown = this.handleKeyDown;
  }

  render() {
    const {
      bombCount,
      currentScore,
      level,
      Actions: {
        actionIncreaseLevel,
        actionResetLevel,
        actionDestroySquare
      },
      increaseNum
    } = this.props;
    this.bindDocumentActions();
    return (
      <div
        className="game-area"
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <Props // 道具
          bombCount={bombCount}
          actionDestroySquare={actionDestroySquare}
        />
        <Power // 能量条
          currentScore={currentScore}
          increaseNum={increaseNum}
          level={level}
          actionIncreaseLevel={actionIncreaseLevel}
          actionResetLevel={actionResetLevel}
        />
        {this.renderGameArea()}
      </div>
    );
  }
}
