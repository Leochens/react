import React, { Component } from 'react';
import './AudioBar.less';
import Slider from '../Slider/Slider';
import Images from '../../contants/Images';
import { secondToMinutes, addPreZero } from '../../tools';
export default class AudioBar extends Component {
  state = {
    du: 0,
    seconds: 0,
    isPause: true
  };
  static defaultProps = {
    isAudioBarActive: false
  }
  pauseMusic = () => {
    const { audio } = this;
    if (!audio) return;
    audio.pause();
    clearInterval(this.interval);
    this.setState({
      isPause: true
    });
  }
  playMusic = () => {
    const { audio } = this;
    const { seconds } = this.state;
    const { music, bmt, endTime } = this.props;
    if (!audio) return;
    audio.currentTime = seconds ? seconds : music.bmt;
    audio.play();
    this.setState({
      seconds: bmt ? bmt : seconds,
      endTime,
      du: music.du,
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
  setAudioPos = pos => {
    const { audio } = this;
    const curTime = this.state.du * (pos / 100).toFixed(2) * 1
    audio.currentTime = curTime;
    this.setState({
      seconds: curTime
    });
  }

  handleTimeUpdate = (e) => {
    const { music: { du }, onTimeChange, endTime, bmt } = this.props;
    const curTime = e.target.currentTime;
    if (curTime >= endTime || curTime <= bmt) {
      // this.pauseMusic(); stop ? no! 老子不停 老子要无限循环
      e.target.currentTime = bmt ? bmt : 0;
      this.setState({
        seconds: bmt ? bmt : 0
      });
    }
    const curSecAndMin = secondToMinutes(curTime).split(':');
    const endSecAndMin = secondToMinutes(du).split(':');
    const cur = addPreZero(curSecAndMin[0]) + ':' + addPreZero(curSecAndMin[1]);
    const end = addPreZero(endSecAndMin[0]) + ':' + addPreZero(endSecAndMin[1]);
    onTimeChange && onTimeChange(`${cur} / ${end}`);
    this.setState({
      seconds: curTime
    })
  }

  componentDidMount() {
    this.playMusic();
  }
  render() {
    const { music, isAudioBarActive, bmt, emt } = this.props;
    const { isPause } = this.state;
    // console.log('audio-bar', this.state);
    // console.log('endTime', this.props.endTime);
    if (!isAudioBarActive) {
      return null;
    }
    return (
      <div className="play-bar">
        <audio
          ref={self => this.audio = self}
          src={music.m_url}
          onTimeUpdate={this.handleTimeUpdate}
        ></audio>
        <span
          className="toggle-play"
          onClick={this.handelTogglePlay}
        >
          <img src={isPause ? Images.btnPlay : Images.btnPause} alt="" />
        </span>
        <div className="slider">
          <Slider
            defaultValue={~~((this.state.seconds / this.state.du) * 100)}
            onChange={this.setAudioPos}
            showSliceStartFlag={bmt}
            showSliceEndFlag={emt}
            begin={{
              icon: Images.cutMusicStart,
              pos: (bmt / music.du) * 100
            }}
            end={{
              icon: Images.cutMusicFinish,
              pos: (emt / music.du) * 100
            }}
          ></Slider>
        </div>
      </div>
    );
  }
}