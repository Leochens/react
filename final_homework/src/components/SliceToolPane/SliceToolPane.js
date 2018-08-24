import React, { Component } from 'react';
import './SliceToolPane.less';
import AudioBar from '../AudioBar/AudioBar';

export default class SliceToolPane extends Component {
  state = {
    timeString: '00:00 / 00:00'
  };
  getAudioTime = timeString => {
    console.log('检测到时间串发生变化', timeString);
    this.setState({
      timeString
    });
  }
  onClose = () => {
    const { onClose } = this.props;

    this.setState({
      timeString: '00:00 / 00:00'
    });
    onClose && onClose();
  }
  render() {
    const {
      music,
      isToolPenaActive,
    } = this.props;
    console.log('tool next music', music);
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
        />
      </div >
    );
  }
}