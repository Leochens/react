import React, { Component } from 'react';
import './SliceToolPane.less';
import AudioBar from '../AudioBar/AudioBar';
import Images from '../../contants/Images';
import { timeStringToSeconds, getFormatTime } from '../../tools';
import Toast from '../Toast/Toast';
import * as TEXT from '../../contants/Text';

export default class SliceToolPane extends Component {
  state = {
    timeString: '00:00 / 00:00',
    bmt: 0,
    emt: 0,
    endTime: 0,
    hasSetBmt: false,
    hasSetEmt: false
  };

  componentWillMount() {
    const { music } = this.props;
    this.setState({
      bmt: music.bmt,
      emt: music.emt,
      endTime: music.emt ? music.emt : music.du,
      hasSetBmt: music.bmt || false,
      hasSetEmt: music.emt || false
    });
  }


  getAudioTime = timeString => {
    this.setState({
      timeString
    });
  }


  setEmt = () => {
    const { timeString } = this.state;
    if (!this.state.hasSetBmt) {
      Toast.info(TEXT.PLEASE_MARK_START_FIRST);
      return;
    }
    if (this.state.hasSetEmt) {
      Toast.info(TEXT.PLEASE_CLEAR_SLICER_FIRST);
      return;
    }

    const curSenconds = timeStringToSeconds(timeString.split('/')[0]);
    if (curSenconds - this.state.bmt <= 10) {
      Toast.info(TEXT.DURATION_ERROR);
      return;
    }
    this.setState({
      emt: curSenconds,
      endTime: curSenconds,
      hasSetEmt: true
    });
  }

  setBmt = () => {
    if (this.state.hasSetBmt) {
      Toast.info(TEXT.PLEASE_CLEAR_SLICER_FIRST);
      return;
    }
    const { timeString } = this.state;
    const curSenconds = timeStringToSeconds(timeString.split('/')[0]);
    this.setState({
      bmt: curSenconds || 1,
      hasSetBmt: true
    });
  }

  clearSlice = () => {
    if (!this.state.hasSetBmt && !this.state.hasSetEmt) {
      Toast.info(TEXT.CLEAR_WITHOUT_BEGIN_AND_START);
      return;
    }
    const { music: { id, du }, ToolActions } = this.props;
    this.setState({
      emt: 0,
      bmt: 0,
      endTime: du,
      hasSetBmt: false,
      hasSetEmt: false
    });
    ToolActions.actionClearSliceMusic(id);
  }

  handleOk = () => {
    const { music: { id }, ToolActions } = this.props;
    const {
      hasSetBmt,
      hasSetEmt,
      emt,
      bmt
    } = this.state;
    if (hasSetBmt && hasSetEmt) {
      ToolActions.actionSliceMusic(id, bmt, emt);
    }
  }

  onClose = () => {
    const { onClose } = this.props;
    this.setState({
      timeString: '00:00 / 00:00'
    });
    this.handleOk();
    onClose && onClose();
  }

  renderSliceTools = () => {
    const { hasSetBmt, hasSetEmt } = this.state;
    return (
      <div className="slice-pane-tools">
        <span
          className="item"
          onClick={this.setBmt}
        >
          <img
            src={hasSetBmt
              ? Images.btnCutMusicStart
              : Images.btnCutMusicStartAc}
            alt=""
          />
          <div className="descript">{TEXT.MARK_SLICE_START}</div>
          <div className="time">{getFormatTime(this.state.bmt)}</div>
        </span>
        <span
          className="item"
          onClick={this.clearSlice}
        >
          <img
            src={(hasSetBmt || hasSetEmt)
              ? Images.btnClearAc
              : Images.btnClear}
            alt=""
          />
          <div className="descript">{TEXT.CLEAR_SLICER}</div>
          <div className="time">&nbsp;</div>
        </span>
        <span
          className="item"
          onClick={this.setEmt}
        >
          <img
            src={hasSetEmt
              ? Images.btnCutMusicFinish
              : Images.btnCutMusicFinishAc}
            alt=""
          />
          <div className="descript">{TEXT.MARK_SLICE_END}</div>
          <div className="time">{getFormatTime(this.state.emt)}</div>
        </span>
      </div>
    );
  }

  render() {
    const {
      music,
      isToolPenaActive
    } = this.props;
    return (
      <div className="slice-pane">
        <div className="slice-pane-audio-head">
          {this.renderSliceTools()}
          <AudioBar
            src={music.m_url}
            isAudioBarActive={isToolPenaActive}
            autoplay="true"
            onTimeChange={this.getAudioTime}
            begin={this.state.bmt}
            end={this.state.endTime}
          />
          <div className="slice-pane-audio-time">{this.state.timeString}</div>
        </div>
        <span
          className="slice-pane-ok"
          onClick={this.onClose}
        >
          {TEXT.OK}
        </span>

      </div>
    );
  }
}
