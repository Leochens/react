import React, { Component } from 'react';
// import ClassInfo from './containers/ClassInfo/ClassInfo';
// import StudyInfo from './containers/StudyInfo/StudyInfo';
// import StudentList from './containers/StudentList/StudentList';
import 'antd/dist/antd.css';
import './App.css';
// import { Router, Route, Switch, } from 'react-router';
import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
      <div >
        <ul className="Router">
          <li><Link to="/classInfo">classInfo</Link></li>
          <li><Link to="/studyInfo">studyInfo</Link></li>
          <li><Link to="/studentList">studentList</Link></li>
        </ul>
          {this.props.children}
      </div>
    );
  }
}


export default App;
