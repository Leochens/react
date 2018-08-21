import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="danger">Button</Button>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>Disabled</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
      </div>
    );
  }
}

export default App;
