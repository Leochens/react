import React, { Component } from 'react';
import ClassInfo from './containers/ClassInfo/ClassInfo';
import StudyInfo from './containers/StudyInfo/StudyInfo';
import StudentList from './containers/StudentList/StudentList';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'


const TabPane = Tabs.TabPane;
class App extends Component {

  render() {
    return (
      <div >

        <ul className="Router">
          <li><Link to="/classInfo">classInfo</Link></li>
          <li><Link to="/studyInfo">studyInfo</Link></li>
          <li><Link to="/studentList">studentList</Link></li>
        </ul>
        <Switch>
          <Route path="/classInfo" component={ClassInfo} />
          <Route path="/studyInfo" component={StudyInfo} />
          <Route path="/studentList" component={StudentList} />
        </Switch>
      </div>
    );
  }
}


export default App;
