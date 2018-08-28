import React, { Component } from 'react';
import './Navigator.less';
import Images from '../../contants/Images';
import * as TEXT from '../../contants/Text';
import Toast from '../Toast/Toast';

export default class Navigator extends Component {
  state = {};

  handelCompleted = () => {
    const {
      ui: {
        isMultipleSelect,
        currentMultipleSelectedMusicIds: mIds,
        currentSingleSelectedId: sId
      }
    } = this.props;
    const num = isMultipleSelect ? mIds.toString() : sId;

    Toast.info(num ? `${TEXT.SELECT_MUSICS}${num}` : TEXT.SELECT_NONE);
  }

  handleBack = () => {
    Toast.info(TEXT.BACK_INFO);
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav">
          <div
            className="left"
            onClick={this.handleBack}
          >
            <img src={Images.btnReturn} alt="" />
            <span />
          </div>
          <div className="title">{this.props.children}</div>
          <div
            className="right"
            onClick={this.handelCompleted}
          >
            <span>{TEXT.COMPLETED}</span>
          </div>
        </div>
      </div>
    );
  }
}
