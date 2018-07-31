import React, { Component } from 'react';
// import logo from './logo.svg';
import { connect } from 'react-redux';
import Head from './components/Head/Head';
import Tabs from './components/Tabs/Tabs';
import { bindActionCreators } from 'redux';
import allActionsCreators from './actions'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import * as api from './api';

class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    api.actionFetchUserInfo('111',dispatch);
    api.actionFetchLessonInfo('111',dispatch);
  }
  render() {
    return (
      <div >
        <Row >
          <Col className="op" span={20} offset={2}>
            <Head
              headData={this.props.headData}
              inputAction={this.props.inputAction}
              dispatch={this.props.dispatch}
              dynamicInfoEditMap = {this.props.dynamicInfoEditMap}
            />
            <Tabs
              tableData={this.props.tableData}
              dispatch={this.props.dispatch}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tableData: state.contentReducer.tableData,
    headData: state.contentReducer.headData,
    dynamicInfoEditMap:state.contentReducer.headData.dynamicInfoEditMap,
    state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    inputAction: bindActionCreators(allActionsCreators.inputAction, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
