import React, { Component } from 'react';
import './SliceToolPane.less';
import AudioBar from '../AudioBar/AudioBar';
import Images from '../../contants/Images';
import { secondToMinutes, timeStringToSeconds } from '../../tools';

export default class SliceToolPane extends Component {
  state = {
    timeString: '00:00 / 00:00',
    bmt: 0,
    emt: 0,
    endTime: 0
  };
  getAudioTime = timeString => {
    console.log('检测到时间串发生变化', timeString);
    this.setState({
      timeString
    });
  }
  componentWillMount() {
    const { music } = this.props;
    this.setState({
      bmt: music.bmt,
      emt: music.emt,
      endTime: music.emt ? music.emt : music.du
    });
  }

  setEmt = () => {
    const { timeString } = this.state;
    const curSenconds = timeStringToSeconds(timeString.split('/')[0]);
    this.setState({
      emt: curSenconds,
      endTime: curSenconds
    })
  }
  setBmt = () => {
    const { timeString } = this.state;
    const curSenconds = timeStringToSeconds(timeString.split('/')[0]);
    this.setState({
      bmt: curSenconds
    })
  }
  clearSlice = () => {
    const { music: { id, du }, SelectActions } = this.props;

    this.setState({
      emt: 0,
      bmt: 0,
      endTime: du
    });
    SelectActions.actionClearSliceMusic(id);
  }

  handleOk = () => {
    const { music: { id }, SelectActions } = this.props;
    const { emt, bmt } = this.state;
    SelectActions.actionSliceMusic(id, bmt, emt);
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
    return (
      <div className="slice-pane-tools">
        <span
          className="item"
          onClick={this.setBmt}
        >
          <img src={Images.btnCutMusicStart} alt="" />
          <div className="descript">标记起点</div>
          <div className="time">{secondToMinutes(this.state.bmt)}</div>
        </span>
        <span
          className="item"
          onClick={this.clearSlice}
        >
          <img src={Images.btnClear} alt="" />
          <div className="descript">清除</div>
          <div className="time">&nbsp;</div>
        </span>
        <span
          className="item"
          onClick={this.setEmt}
        >
          <img src={Images.btnCutMusicFinish} alt="" />
          <div className="descript">标记终点</div>
          <div className="time">{secondToMinutes(this.state.emt)}</div>
        </span>
      </div>
    )
  }

  render() {
    const {
      music,
      isToolPenaActive,
    } = this.props;
    console.log('托管组件的state', this.state);
    console.log('tool next music', music);
    return (
      <div className="slice-pane">
        <div className="slice-pane-audio-head">
          {this.renderSliceTools()}
          <AudioBar
            music={music}
            isAudioBarActive={isToolPenaActive}
            autoplay={false}
            onTimeChange={this.getAudioTime}
            bmt={this.state.bmt}
            emt={this.state.emt}
            endTime={this.state.endTime}
          />
          <div className="slice-pane-audio-time">{this.state.timeString}</div>
        </div>

        <span
          className="slice-pane-ok"
          onClick={this.onClose}
        >确认</span>
      </div >
    );
  }
}