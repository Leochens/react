import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import tools from '../tools';
import Header from '../components/Header/Header';
import Square from '../components/Square/Square';
import Power from '../components/Power/Power';
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
    console.log('changedSquares', this.props.changedSquares);
    const { squareMap, newPos, changedSquares } = this.props;
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

  handleTouchStart = e => {
    console.log('start', e.touches[0].pageX);
    this.setState({
      startX: e.touches[0].pageX,
      startY: e.touches[0].pageY
    });
  }

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
      console.log(distanceX > 0 ? '右' : '左');
      if (distanceX > 0) {
        actionMoveByDirections('right');
      } else {
        actionMoveByDirections('left');
      }
    } else if (Math.abs(distanceX) < Math.abs(distanceY)) {
      console.log(distanceY > 0 ? '下' : '上');
      if (distanceY > 0) {
        actionMoveByDirections('down');
      } else {
        actionMoveByDirections('up');
      }
    }
  }

  bindDocumentActions = () => {
    document.onkeydown = this.handleKeyDown;
    document.ontouchstart = this.handleTouchStart;
    document.ontouchend = this.handleTouchEnd;
  }

  render() {
    const {
      currentScore,
      increaseNum,
      Actions: {
        actionInitSquareMap
      }
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
            />
            <div className="game-area">
              <Power
                currentScore={currentScore}
                increaseNum={increaseNum}
              />
              {this.renderGameArea()}
            </div>
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
  changedSquares: state.Game.changedSquares
});

const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameHome);
