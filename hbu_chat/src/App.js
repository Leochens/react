import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar/Navbar';
import Tabs from './components/Tabs/Tabs'
// import _ from 'ladash';
import './App.css';
import axios from 'axios';

class App extends Component {

  callServerApi = (url, param, normalizeFunc) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        // method:"GET",
        // headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: url,
        data: param
      }).then(res => {
        console.log('网络请求结束的最原始数据', res);
        const json = res.data.data;
        if (res.data.ret === 1) {
          return resolve(normalizeFunc ? normalizeFunc(json) : json);
        }
        return reject(res);
      }).catch(err => {
        return reject(err);
      })
    })
  }

  componentDidMount(){
    this.callServerApi('http://192.144.145.94:6677/management/addnewstaff_dep_load',{});
  }

  render() {
    debugger
    return (
      <div>
        <NavBar />
        <Tabs>
        </Tabs>
        {this.props.children}
      </div>
    );
  }
}

export default App;
