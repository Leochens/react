import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import * as ActionCreators from '../actions';

class GameHome extends Component {
  state = {
  };

  render() {
    return (
      <Row>
        <Col span={8} offset={8} >
          
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(ActionCreators,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(GameHome)