import React, { Component } from 'react';
import './AudioBar.less';

import Slider from '../Slider/Slider';

export default class AudioBar extends Component {
  state = {
    seconds: 0,
    endTime: 1
  };

  pauseMusic = () => {
    console.log(this.audio);
    const { audio } = this;
    audio.pause();
    clearInterval(this.interval);
  }

  playMusic = () => {
    const { audio } = this;
    this.interval = setInterval(() => this.tick(), 1000);
    audio.play();
  }

  componentWillReceiveProps(nextProps) {
    const { music } = nextProps;
    this.setState({
      seconds: 0,
      endTime: ~~music.du
    })
  }

  setCurrentTime = () => {
    const { audio } = this;
  }


  tick = () => {
    const { seconds, endTime } = this.state;
    if (seconds >= endTime) {
      this.pauseMusic();
      this.setState({
        seconds: 0
      });
    } else {
      this.setState({
        seconds: seconds + 1
      });
    }
  }
  render() {
    const { music, ui } = this.props;
    console.log('audiobar', this.state);
    if (!ui.play) return null;
    return (
      <div className="audio-bar-wrapper">
        <div className="audio-bar">
          <audio
            ref={self => this.audio = self}
            autoPlay={false}
            src={music.m_url}
          ></audio>
          <button onClick={this.playMusic}>播放</button>
          <button onClick={this.pauseMusic}>暂停</button>
          <Slider
            defaultValue={~~((this.state.seconds / this.state.endTime) * 100)}
          ></Slider>
        </div >
      </div>

    );
  }
}