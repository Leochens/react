import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import tools from '../tools';
import Header from '../components/Header/Header';
import Square from '../components/Square/Square';
import Power from '../components/Power/Power';
import Props from '../components/Props/Props';
import './GameHome.css';
import './animate.css';

class GameHome extends Component {
  state = {
    startX: 0,
    startY: 0
  };

  componentDidMount() {
    const { Actions } = this.props;
    Actions.actionInitSquareMap();
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

  // 绑定文档事件 页面一加载就能响应键盘事件和触摸事件
  bindDocumentActions = () => {
    document.onkeydown = this.handleKeyDown;
    document.ontouchstart = this.handleTouchStart;
    document.ontouchend = this.handleTouchEnd;
  }

  render() {
    const {
      currentScore,
      increaseNum,
      maxScore,
      Actions: {
        actionInitSquareMap,
        actionIncreaseLevel,
        actionResetLevel,
        actionDestroySquare
      },
      bombCount,
      level,
      isDie
    } = this.props;

    this.bindDocumentActions();

    return (
      <div>
        <div className="game-wraper">
          <div className="game-main">
            <Header
              currentScore={currentScore}
              increaseNum={increaseNum}
              restartAction={actionInitSquareMap}
              maxScore={maxScore}
              level={level}
            />
            <div className="game-area">
              <Props
                bombCount={bombCount}
                actionDestroySquare={actionDestroySquare}
              />
              <Power
                currentScore={currentScore}
                increaseNum={increaseNum}
                level={level}
                actionIncreaseLevel={actionIncreaseLevel}
                actionResetLevel={actionResetLevel}
              />
              {this.renderGameArea()}
            </div>
            {isDie
              ? (
                <div className="game-die">
                  GAME OVER 你停在了第
                  {level}
                  关
                  {
                    bombCount > 0
                      ? '你还可以使用炸弹'
                      : '你真的输了，重新来吧'
                  }
                </div>
              )
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

  currentScore: state.Game.currentScore,
  squareMap: state.Game.squareMap,
  increaseNum: state.Game.increaseNum,
  newPos: state.Game.newPos,
  changedSquares: state.Game.changedSquares,
  maxScore: state.Game.maxScore,
  isDie: state.Game.isDie,
  level: state.reward.level,
  bombCount: state.reward.bombCount

});

const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameHome);
