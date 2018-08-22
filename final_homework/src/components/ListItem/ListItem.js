import React, { Component } from 'react';
import './ListItem.less';
import CheckBox from '../CheckBox/CheckBox';

export default class ListItem extends Component {

  handleClickMusic = () => {
    const { onSelect, id } = this.props;
    onSelect && onSelect(id);
  }
  render() {
    const { data } = this.props;
    return (
      <div
        className="list-item"
        onClick={this.handleClickMusic}
      >
        <span>
          <CheckBox
            isChecked={this.props.isSelected}
          />
        </span>
        {data.name}
      </div>
    );
  }
}