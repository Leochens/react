import React, { Component } from 'react';
import './ListItem.less';
import CheckBox from '../CheckBox/CheckBox';

export default class ListItem extends Component {
  handleClickMusic = () => {
    const { onSelect, id, updateToolState } = this.props;

    onSelect && onSelect(id);
    this.updateToolState();
  }

  updateToolState = () => {
    const { isMultipleSelect, actionUpdateToolState, data } = this.props;
    const newToolState = {
      play: isMultipleSelect ? false : true,
      rename: data.plp || !data.med ? false : true,
      slice: data.med ? true : false,
      share: data.med ? true : false,
      delete: data.med ? true : false
    }
    actionUpdateToolState && actionUpdateToolState(newToolState);
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