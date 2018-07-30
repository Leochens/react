import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Head from './components/Head/Head';
import Tabs from './components/Tabs/Tabs';
import { bindActionCreators } from 'redux';
import allActionsCreators from './actions' 
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


class App extends Component {
  render() {

    // console.log(this.props.inputAction)
    return (
      <div >
        <Row >
          <Col className="op" span={20} offset={2}>
            <Head
              headData={this.props.headData}
              inputAction = {this.props.inputAction}
            />
            <Tabs
              tableData={this.props.tableData}
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

  }
}
const mapDispatchToProps = dispatch => {
  return {
    inputAction: bindActionCreators(allActionsCreators.inputAction,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
