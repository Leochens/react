import React, { Component } from 'react';
import ClassInfo from './containers/ClassInfo/ClassInfo';
import StudyInfo from './containers/StudyInfo/StudyInfo';
import StudentList from './containers/StudentList/StudentList';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
const TabPane = Tabs.TabPane;
class App extends Component {

  render() {
    return (
      <div >
        <Tabs
          defaultActiveKey="1">
          <TabPane tab='课程信息' key="1">
            <ClassInfo />
          </TabPane>
          <TabPane tab='上课详情' key="2">
            <StudyInfo />
          </TabPane>
          <TabPane tab='学员档案' key="3">
            <StudentList />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}


export default App;
