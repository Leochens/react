import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button } from 'antd';
import * as ActionCreators from '../actions';

class GameHome extends Component {
  state = {
  };

  render() {
    const { currentScore } = this.props;
    return (
      <Row>
        <Col span={8} offset={8} >
          <h1>{currentScore}</h1>
          <Button
            onClick={this.props.Actions.actionUpdateScore.bind(this, 5)}
          >
            Add
           </Button>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentScore: state.main.currentScore
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameHome)