import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
      <div >
        {/* <ul className="Router">
          <li><Link to="/studentList">学员档案</Link></li>
          <li><Link to="/classInfo">课程信息</Link></li>
          <li><Link to="/studyInfo">上课详情</Link></li>
        </ul> */}
        {this.props.children}
      </div >
    );
  }
}


export default App;
