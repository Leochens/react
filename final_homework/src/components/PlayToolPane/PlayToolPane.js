import React, { Component } from 'react';
import './PlayToolPane.less';
import AudioBar from '../AudioBar/AudioBar';
import * as TEXT from '../../contants/Text';

const initTimeString = '00:00 / 00:00';

export default class PlayToolPane extends Component {
  state = {
    timeString: initTimeString,
    bmt: 0,
    emt: 0
  };

  componentWillMount() {
    const { music } = this.props;
    this.setState({
      bmt: music.bmt,
      emt: music.emt
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
      isToolPenaActive
    } = this.props;

    return (
      <div className="audio-bar">
        <div className="audio-head">
          <div className="title">{music.name}</div>
          <button
            type="button"
            className="close"
            onClick={this.onClose}
          >
            {TEXT.CLOSE}
          </button>
          <div className="audio-time">{this.state.timeString}</div>
        </div>
        <AudioBar
          src={music.m_url}
          isAudioBarActive={isToolPenaActive}
          autoplay="true"
          onTimeChange={this.getAudioTime}
          begin={this.state.bmt}
          end={this.state.emt}
        />
      </div>
    );
  }
}
