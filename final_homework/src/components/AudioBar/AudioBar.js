import React, { Component } from 'react';
import './AudioBar.less';
import Slider from '../Slider/Slider';
import Images from '../../contants/Images';
import { secondToMinutes, addPreZero } from '../../tools';
export default class AudioBar extends Component {
  state = {
    seconds: 0,
    endTime: 1,
    isPause: true
  };

  static defaultProps = {
    isAudioBarActive: false
  }

  pauseMusic = () => {
    // console.log(this.audio);
    const { audio } = this;
    audio.pause();
    clearInterval(this.interval);
    this.setState({
      isPause: true
    });
  }

  playMusic = () => {
    const { audio } = this;
    this.interval = setInterval(() => this.tick(), 1000);
    audio.play();
    this.setState({
      isPause: false
    });
  }

  handelTogglePlay = () => {
    if (this.state.isPause) {
      this.playMusic();
    } else {
      this.pauseMusic();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { music } = nextProps;
    this.setState({
      seconds: 0,
      endTime: ~~music.du
    })
  }

  // setCurrentTime = () => {
  //   const { audio } = this;
  // }


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
  getClassName = () => {
    const { isAudioBarActive } = this.props;
    return 'audio-bar-wrapper' + (isAudioBarActive ? ' ' : ' hide')
  }

  /**
   * 时间格式化
   */
  renderMinutes = () => {
    const { seconds, endTime } = this.state;
    const curSecAndMin = secondToMinutes(seconds).split(':');
    const endSecAndMin = secondToMinutes(endTime).split(':');

    const cur = addPreZero(curSecAndMin[0]) + ':' + addPreZero(curSecAndMin[1]);
    const end = addPreZero(endSecAndMin[0]) + ':' + addPreZero(endSecAndMin[1]);
    return (
      <div className="audio-time">{cur} / {end}</div>
    );
  }
  render() {
    const { music, onClose, isAudioBarActive } = this.props;
    const { isPause } = this.state;
    console.log('audio-bar', this.state);
    if(!isAudioBarActive) {
      return null;
    }
    return (
      <div className={this.getClassName()}>
        <div className="audio-bar">
          <audio
            ref={self => this.audio = self}
            autoPlay={false}
            src={music.m_url}
          ></audio>
          <div className="audio-head">
            <div className="title">{music.name}</div>
            <button
              className="close"
              onClick={onClose}  
            >关闭</button>
            {this.renderMinutes()}
          </div>
          <div className="play-bar">
            <span
              className="toggle-play"
              onClick={this.handelTogglePlay}
            >
              <img src={isPause ? Images.btnPlay : Images.btnPause} alt="" />
            </span>
            <div className="slider">
              <Slider
                defaultValue={~~((this.state.seconds / this.state.endTime) * 100)}
              ></Slider>
            </div>

          </div>

        </div >
      </div>

    );
  }
}