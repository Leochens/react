import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import Square from '../components/Square/Square';
import tools from '../tools';
import './GameHome.css';
import './animate.css';

class GameHome extends Component {
  componentDidMount() {
    const { Actions } = this.props;
    Actions.actionInitSquareMap();
  }
  state = {
    startX: 0,
    startY: 0
  };
  renderGameArea = () => {
    console.log('changedSquares', this.props.changedSquares);
    const { squareMap, newPos, changedSquares } = this.props;
    return squareMap.map((row, rowId) => {
      return <div key={rowId} >
        {
          row.map((squareNum, colId) => {
            return <Square
              //判断是否是新的方格
              isNew={(newPos.row === rowId && newPos.col === colId) ? true : false}
              isChange={changedSquares.includes(tools.transformPosToNum(rowId, colId))}
              key={colId}
              num={squareNum} />
          })
        }
      </div>
    })
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
      startY: e.touches[0].pageY,
    })
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
      distanceX > 0
        ? actionMoveByDirections('right')
        : actionMoveByDirections('left') ;
    } else if (Math.abs(distanceX) < Math.abs(distanceY)) {
      console.log(distanceY > 0 ? '下' : '上');
      distanceY > 0
        ?  actionMoveByDirections('down')
        : actionMoveByDirections('up');
    }else return ;
  }
  render() {

    const {
      currentScore,
      Actions: {
        actionInitSquareMap,
      }
    } = this.props;
    document.onkeydown = this.handleKeyDown;
    document.ontouchstart = this.handleTouchStart;
    document.ontouchend = this.handleTouchEnd;
    return (
      <div>
        <div className="game-wraper" >
          <div className="game-main">
            <div className="header-warper">
              <span className="title2048">
                2048
              </span>
              <div className="header-right">
                <div className="score">
                  <span className="">{currentScore}+{this.props.increaseNum}</span>
                </div>
              </div>
              <div className="btn-wraper">
                <button
                  className="restart-btn"
                  onClick={actionInitSquareMap}
                >
                  重新开始
           </button>
              </div>
            </div>
            <div>
              {this.renderGameArea()}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentScore: state.Game.currentScore,
    squareMap: state.Game.squareMap,
    increaseNum: state.Game.increaseNum,
    newPos: state.Game.newPos,
    changedSquares: state.Game.changedSquares
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameHome)