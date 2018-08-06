import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head/Head';
import Tabs from '../../components/Tabs/Tabs';
import { bindActionCreators } from 'redux';
import allActionsCreators from '../../actions'
import { Row, Col, message } from 'antd';

class ClassInfo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const { state } = this.props.location;
    if (!state) {
      message.error("缺少必要的url参数");
      this.props.router.goBack();
    }

  }
  componentDidMount() {
    const { serverAction } = this.props;
    const mid = 1001;
    serverAction.actionFetchUserInfo(mid);
    serverAction.actionFetchLessonInfo(mid);
    serverAction.actionFetchSatisfiedList(mid);
  }
  render() {
    return (
      <div >
        <Row >
          <Col span={20} offset={2}>
            <Head
              headData={this.props.headData}
              inputAction={this.props.inputAction}
              dynamicInfoEditMap={this.props.dynamicInfoEditMap}
              urlData={this.props.location.state}
            />
            <Tabs
              tableData={this.props.tableData}
              satisfiedList={this.props.satisfiedList}
              back={this.props.router.goBack}
              tableAction={this.props.tableAction}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { tableReducer, satisfiedReducer } = state;
  const currentLessonsList = tableReducer.currentLessonIds.map(item => {
    const { teacherInfo, classInfo } = tableReducer.lessonEntities[item];
    return {
      ...tableReducer.lessonEntities[item],
      teacherInfo: tableReducer.teacherEntities[teacherInfo],
      classInfo: tableReducer.classEntities[classInfo]
    }
  })
  const historyLessonsList = tableReducer.historyLessonIds.map(item => {

    const { teacherInfo, classInfo } = tableReducer.lessonEntities[item];
    const tmp = {
      ...tableReducer.lessonEntities[item],
      teacherInfo: tableReducer.teacherEntities[teacherInfo],
      classInfo: tableReducer.classEntities[classInfo]
    }
    return tmp;
  })
  const tableData = {
    currentLessonsList,
    historyLessonsList
  }
  console.log('timeList ',satisfiedReducer.timeList);
  const satisfiedList = satisfiedReducer.timeList.map(item => {
    const { teacher_info, class_info } = satisfiedReducer.satisfiedEntities[item];
    return {
      ...satisfiedReducer.satisfiedEntities[item],
      teacher_info: satisfiedReducer.teacherEntities[teacher_info],
      class_info: satisfiedReducer.classEntities[class_info]
    }
  })
  return {
    tableData,
    headData: state.headReducer,
    satisfiedList,
    dynamicInfoEditMap: state.headReducer.dynamicInfoEditMap,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    inputAction: bindActionCreators(allActionsCreators.inputAction, dispatch),
    serverAction: bindActionCreators(allActionsCreators.serverAction, dispatch),
    tableAction: bindActionCreators(allActionsCreators.tableAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassInfo);
