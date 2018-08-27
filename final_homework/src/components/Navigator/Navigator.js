import React, { Component } from 'react';
import './Navigator.less';
import Images from '../../contants/Images';
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
    Toast.info(`当前选中了${num}`);
    
  }
  handleBack = () => {
    Toast.info('你点击了返回')
  }
  render() {

    return (
      <div className="nav-wrapper">
        <div className="nav">
          <div className="left"
            onClick={this.handleBack}>
            <img src={Images.btnReturn} alt="" />
            <span></span>
          </div>
          <div className="title">{this.props.children}</div>
          <div className="right"
            onClick={this.handelCompleted}>
            <span>完成</span>
          </div>
        </div>
      </div>
    );
  }
}


