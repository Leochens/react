import React, { Component } from 'react';
import './PlayToolPane.less';
import AudioBar from '../AudioBar/AudioBar';

const initTimeString = '00:00 / 00:00';

export default class PlayToolPane extends Component {
  state = {
    timeString: initTimeString,
    bmt: 0,
    emt: 0,
    endTime: 0
  };
  componentWillMount() {
    const { music } = this.props;
    this.setState({
      bmt: music.bmt,
      emt: music.emt,
      endTime: music.emt ? music.emt : music.du
    });
  }
  getAudioTime = timeString => {
    this.setState({
      timeString
    });
  }
  onClose = () => {
    const { onClose } = this.props;
    this.setState({
      timeString: initTimeString,
      pause: true
    });
    onClose && onClose();
  }
  render() {
    const {
      music,
      isToolPenaActive,
    } = this.props;
    return (
      <div className="audio-bar">
        <div className="audio-head">
          <div className="title">{music.name}</div>
          <button
            className="close"
            onClick={this.onClose}
          >关闭</button>
          <div className="audio-time">{this.state.timeString}</div>
        </div>
        <AudioBar
          music={music}
          isAudioBarActive={isToolPenaActive}
          autoplay={false}
          onTimeChange={this.getAudioTime}
          bmt={this.state.bmt}
          emt={this.state.emt}
          endTime={this.state.endTime}
        />
      </div >
    );
  }
}