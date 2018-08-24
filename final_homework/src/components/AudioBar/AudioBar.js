import React, { Component } from 'react';
import './AudioBar.less';
import Slider from '../Slider/Slider';
import Images from '../../contants/Images';
import { secondToMinutes, addPreZero } from '../../tools';
export default class AudioBar extends Component {
  state = {
    du:0,
    seconds: 0,
    endTime: 1,
    isPause: true
  };
  static defaultProps = {
    isAudioBarActive: false
  }
  pauseMusic = () => {
    const { audio } = this;
    if (!audio) {
      return;
    }
    audio.pause();
    clearInterval(this.interval);
    this.setState({
      isPause: true
    });
  }
  playMusic = () => {
    const { music } = this.props;
    const { audio } = this;
    if (!audio) {
      return;
    }
    audio.currentTime = music.bmt ? music.bmt : 0;
    this.interval = setInterval(() => this.tick(), 1000);
    audio.play();
    this.setState({
      seconds: music.bmt ? music.bmt : 0,
      endTime: music.emt ? music.emt : music.du,
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
  componentWillReceiveProps(nextProps) {
    const { music } = nextProps;
    console.log('next music', music);
    // 关键判断 不然父级组件不能每秒都得到时间
    if (this.props.music === music) {
      return;
    }
    this.setState({
      du: music.du,
      seconds: music.bmt ? music.bmt : 0,
      endTime: music.emt ? music.emt : music.du,
      isPause: true
    });
    

    clearInterval(this.interval);
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
    // 每秒都向上一组件发送当前时间串
    this.sendTimeString();
  }

  setAudioPos = pos => {
    const { audio } = this;
    const curTime = this.state.du * (pos / 100).toFixed(2) * 1
    audio.currentTime = curTime;
    this.setState({
      seconds: curTime
    });
    // 有拖动事件 向上一组件发送当前时间串
    // console.log('发生拖动事件');
    this.sendTimeString();
  }
  sendTimeString = () => {
    const { onTimeChange } = this.props;
    const timeString = this.getTimeString();
    onTimeChange && onTimeChange(timeString);
  }

  /**
   * 时间格式化
   */
  getTimeString = () => {
    const { seconds, du } = this.state;
    const curSecAndMin = secondToMinutes(seconds).split(':');
    const endSecAndMin = secondToMinutes(du).split(':');
    const cur = addPreZero(curSecAndMin[0]) + ':' + addPreZero(curSecAndMin[1]);
    const end = addPreZero(endSecAndMin[0]) + ':' + addPreZero(endSecAndMin[1]);
    return `${cur} / ${end}`;
  }


  render() {
    const { music, isAudioBarActive } = this.props;
    const { isPause } = this.state;
    console.log('audio-bar', this.state);
    if (!isAudioBarActive) {
      return null;
    }
    return (
      <div className="play-bar">
        <audio
          ref={self => this.audio = self}
          autoPlay={false}
          src={music.m_url}
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
            showSliceFlag={!(!music.bmt && !music.emt)}
            begin={{
              icon: Images.cutMusicStart,
              pos: (music.bmt / music.du) * 100
            }}
            end={{
              icon: Images.cutMusicFinish,
              pos: (music.emt / music.du) * 100
            }}
            enableSlice={true}
          ></Slider>
        </div>
      </div>
    );
  }
}