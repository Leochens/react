import React, { Component } from 'react';
import './SelectBar.less';
import SelectBox from '../SelectBox/SelectBox';

export default class SelectBar extends Component {
  state = {
    currentCheckedId: 0
  };

  handleCheck = id => {
    this.setState({
      currentCheckedId: id
    })
  }

  renderSelectBox = () => {
    const data = [
      {
        text: '单选',
        action: () => {console.log('单选');}
      },
      {
        text: '多选',
        action: () => {console.log('多选');}
      }
    ]
    
    return data.map((item, id) =>
      (<SelectBox
        key={`SelectBox_${id}`}
        id={id}
        checked={id === this.state.currentCheckedId}
        onCheck={this.handleCheck}
        data={item}
      />)
    );
  }

  render() {
    return (
      <div>
        {this.renderSelectBox()}
      </div>
    );
  }
}