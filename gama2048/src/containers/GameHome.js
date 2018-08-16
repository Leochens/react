import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button } from 'antd';
import * as ActionCreators from '../actions';
import Square from '../components/Square/Square';
import './GameHome.css';
import './animate.css';

class GameHome extends Component {
  componentDidMount() {
    const { Actions } = this.props;
    Actions.actionInitSquareMap();
  }
  state = {
  };
  renderGameArea = () => {
    const { squareMap, newPos } = this.props;
    return squareMap.map((row, rowId) => {
      return <div key={rowId} >
        {
          row.map((squareNum, colId) => {
            return <Square
              //判断是否是新的方格
              isNew={(newPos.row === rowId && newPos.col === colId) ? true : false}
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
        actionPressKayBoardByDirections,
        actionClearNewPos
      }
    } = this.props;
    if ([65, 37, 87, 38, 68, 39, 83, 40].includes(e.keyCode)) {
      actionPressKayBoardByDirections(e.keyCode);
      setTimeout(()=>actionClearNewPos(),400);  // 清除位置 防止方格动画失效
    } else return null;
  }
  render() {
    // document.onkeyup(this.handleKeyDown);
    const {
      currentScore,
      Actions: {
        actionInitSquareMap,
      }
    } = this.props;
    document.onkeydown = this.handleKeyDown;
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
              <div>
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
    newPos: state.Game.newPos
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameHome)