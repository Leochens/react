import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
