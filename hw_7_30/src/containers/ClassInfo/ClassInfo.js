import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head/Head';
import Tabs from '../../components/Tabs/Tabs';
import { bindActionCreators } from 'redux';
import allActionsCreators from '../../actions'
import { Row, Col } from 'antd';

class ClassInfo extends Component {
  componentDidMount(){
    const { serverAction } = this.props;
    serverAction.actionFetchUserInfo('111');
    serverAction.actionFetchLessonInfo('111');
  }
  render() {
    return (
      <div >
        <Row >
          <Col span={20} offset={2}>
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
    tableData: state.tableReducer,
    headData: state.headReducer,
    dynamicInfoEditMap:state.headReducer.dynamicInfoEditMap,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    inputAction: bindActionCreators(allActionsCreators.inputAction, dispatch),
    serverAction: bindActionCreators(allActionsCreators.serverAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassInfo);
