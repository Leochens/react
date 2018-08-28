import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/ClassInfoHead/Head';
import Tabs from '../../components/ClassInfoTabs/ClassInfoTabs';
import { bindActionCreators } from 'redux';
import allActionsCreators from '../../actions'
import { Row, Col } from 'antd';

class ClassInfo extends Component {

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
              urlData={this.props.params}
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

  const { 
    classInfoReducer: {
      lessonReducer: lessonIds,
      satisfiedReducer: satisfiedIdsByTime
    },
    entitiesReducer: {
      teachers,
      lessons,
      classes,
      satisfied
    }
  } = state;

  //在学课程
  const currentLessonsList = lessonIds.currentLessonIds.map(id => {
    const { 
      teacherInfo: teacherId, 
      classInfo: classId 
    } = lessons[id];
    return {
      ...lessons[id],
      teacherInfo: teachers[teacherId],
      classInfo: classes[classId]
    }
  })
  //历史课程
  const historyLessonsList = lessonIds.historyLessonIds.map(id => {
    const { 
      teacherInfo: teacherId, 
      classInfo: classId 
    } = lessons[id];
    return {
      ...lessons[id],
      teacherInfo: teachers[teacherId],
      classInfo: classes[classId]
    }
  })

  //满意度列表
  const satisfiedList = satisfiedIdsByTime.timeList.map(time => {
    const { teacher_info, class_info } = satisfied[time];
    return {
      ...satisfied[time],
      teacher_info: teachers[teacher_info],
      class_info: classes[class_info]
    }
  })

  return {
    tableData: {
      currentLessonsList,
      historyLessonsList
    },
    headData: state.classInfoReducer.headReducer,
    satisfiedList,
    dynamicInfoEditMap: state.classInfoReducer.headReducer.dynamicInfoEditMap,
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
