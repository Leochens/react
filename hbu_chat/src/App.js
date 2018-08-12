import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar/Navbar';
import Tabs from './components/Tabs/Tabs'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          {this.props.children}
        <Tabs>
        </Tabs>
      </div>
    );
  }
}

export default App;
