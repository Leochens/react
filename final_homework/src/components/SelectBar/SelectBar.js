import React, { Component } from 'react';
import './SelectBar.less';
import SelectBox from '../SelectBox/SelectBox';
import * as TEXT from '../../contants/Text';

export default class SelectBar extends Component {
  state = {
    currentCheckedId: 0
  };

  handleCheck = id => {
    this.setState({
      currentCheckedId: id
    });
  }

  renderSelectBox = () => {
    const {
      SelectActions: {
        actionChangeToMultipleSelect,
        actionChangeToSingleSelect
      },
      isMultipleSelect
    } = this.props;
    const data = [
      {
        text: TEXT.SINGLE_SELECT,
        action: actionChangeToSingleSelect,
        checked: !isMultipleSelect
      },
      {
        text: TEXT.MULTIPLE_SELECT,
        action: actionChangeToMultipleSelect,
        checked: isMultipleSelect
      }
    ];

    return data.map((item, id) => (
      <SelectBox
        key={`SelectBox_${id}`}
        id={id}
        checked={item.checked}
        onCheck={this.handleCheck}
        data={item}
      />
    ));
  }

  render() {
    return (
      <div className="select-bar">
        {this.renderSelectBox()}
      </div>
    );
  }
}
