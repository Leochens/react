import React, { Component } from 'react';
import './ToolPane.less';
import AudioBar from '../AudioBar/AudioBar';

export default class ToolPane extends Component {
  state = {
    timeString: '/'
  };

  // 交给AudioBar去回调 来改变当前时间串(播放事件/结束时间)
  getAudioTime = timeString => {
    console.log('检测到时间串发生变化', timeString);
    this.setState({
      timeString
    });
  }

  getClassName = () => {
    const { isToolPenaActive } = this.props;
    return 'audio-bar-wrapper' + (isToolPenaActive ? ' ' : ' hide')
  }

  render() {
    const {
      music,
      isToolPenaActive,
      onClose
    } = this.props;

    return (
      <div className={this.getClassName()}>
        <div className="audio-bar">
          <div className="audio-head">
            <div className="title">{music.name}</div>
            <button
              className="close"
              onClick={onClose}
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
      </div>
    );
  }
}