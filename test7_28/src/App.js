import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Todo from './containers/Todo'
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'   //引入样式

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}

export default App;
