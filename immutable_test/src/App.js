import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from './action';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { Actions } = this.props;
    Actions.add();
  }
  render() {
    const { x, y, age } = this.props;

    return (
      <div className="App">
        <h1>X:{x}</h1>
        <h1>Y:{y}</h1>
        <h1>age:{age}</h1>
      </div>
    );
  }
}
const msp = state => {
  const _state = state.toJS().root;
  return {
    x: _state.x,
    y: _state.y,
    age: _state['1'].age
  }
}
const mdp = dispatch => {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch)
  }
}
export default connect(msp, mdp)(App);
