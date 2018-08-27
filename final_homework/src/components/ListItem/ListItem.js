import React, { Component } from 'react';
import './ListItem.less';
import CheckBox from '../CheckBox/CheckBox';

export default class ListItem extends Component {
  handleClickMusic = () => {
    const { onSelect, data } = this.props;

    onSelect && onSelect(data);
  }

  render() {
    const {
      data,
      isMultipleSelect,
      order,
      isSelected
    } = this.props;

    return (
      <div
        className="list-item"
        onClick={this.handleClickMusic}
      >
        <span>
          <CheckBox
            isChecked={isSelected}
            type={isMultipleSelect ? 'multiple' : 'single'}
            // 如果当前ids数组里没有 那么就会返回-1 再+1就是0 不显示
            order={order + 1}
          />
        </span>
        {data.name}
      </div>
    );
  }
}