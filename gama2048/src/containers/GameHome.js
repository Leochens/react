import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button } from 'antd';
import * as ActionCreators from '../actions';
import Square from '../components/Square/Square';
import './GameHome.css'
class GameHome extends Component {
  componentDidMount() {
    const { Actions } = this.props;
    Actions.actionInitSquareMap();
  }
  state = {
  };
  renderGameArea = () => {
    const { squareMap, newPos } = this.props;
    console.log('???', (newPos.row !== -1 && newPos.col !== -1));
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
        actionPressKayBoardByDirections
      }
    } = this.props;
    if ([65, 37, 87, 38, 68, 39, 83, 40].includes(e.keyCode)) {
      actionPressKayBoardByDirections(e.keyCode)
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
            <h1>{currentScore}</h1>
            <Button
              onClick={actionInitSquareMap}
            >
              restart
           </Button>
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