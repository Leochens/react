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
    const {
      SelectActions:{
        actionChangeToMultipleSelect,
        actionChangeToSingleSelect
      }
    } = this.props;
    const data = [
      {
        text: '单选',
        action: actionChangeToSingleSelect
      },
      {
        text: '多选',
        action: actionChangeToMultipleSelect
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
      <div className="select-bar">
        {this.renderSelectBox()}
      </div>
    );
  }
}