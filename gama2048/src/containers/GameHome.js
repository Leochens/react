import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button } from 'antd';
import * as ActionCreators from '../actions';
import Square from '../components/Square/Square';
class GameHome extends Component {
  componentDidMount() {
    const { Actions } = this.props;
    Actions.actionInitSquareMap();
  }
  state = {
  };
  renderGameArea = () => {
    const { squareMap } = this.props;
    return squareMap.map((row, rowId) => {
      return <div key={rowId} >
        {
          row.map((squareNum, colId) => {
            return <Square key={colId} num={squareNum} />
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
    if ([65, 37, 87, 38, 68, 39, 83, 40].includes(e.which)) {
      actionPressKayBoardByDirections(e.which)
    } else return null;
  }
  render() {
    const {
      currentScore,
      Actions: {
        actionUpdateScore,
        actionInitSquareMap,
        actionAddNewSquare,
      }
    } = this.props;
    return (
      <Row onKeyDown={this.handleKeyDown}>
        <Col span={8} offset={8} >
          <h1>{currentScore}</h1>
          <Button
            onClick={actionUpdateScore.bind(this, 5)}
          >
            Add
           </Button>
          <Button
            onClick={actionInitSquareMap}
          >
            restart
           </Button>
          <Button
            onClick={actionAddNewSquare}
          >
            tap
           </Button>
          <Row>
            {this.renderGameArea()}
          </Row>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentScore: state.score.currentScore,
    squareMap: state.squareMap
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameHome)