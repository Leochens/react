import React, { Component } from 'react';
import './AudioBar.less';
import Slider from '../Slider/Slider';
import Images from '../../contants/Images';
import { secondToMinutes, addPreZero } from '../../tools';
export default class AudioBar extends Component {
  state = {
    du: 0,
    seconds: 0,
    // endTime: 1,
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
    const { music, bmt, emt, endTime } = this.props;

    console.log('props.music', music);
    if (!audio) return;
    audio.currentTime = seconds ? seconds : music.bmt;
    console.log('currentTime', audio.currentTime);
    this.interval = setInterval(() => this.tick(), 1000);
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
  componentWillReceiveProps(nextProps) {
    const { music, bmt, emt } = nextProps;
    const { music: _music, bmt: _bmt, emt: _emt } = this.props;
    console.log('next music', music);
    // 关键判断 不然父级组件不能每秒都得到时间 并且会一卡一卡的
    if (_music === music) {
      return;
    }
    if (_bmt !== bmt) {
      return;
    }
    if (_music !== music) {
      this.setState({
        seconds: bmt ? bmt : this.state.seconds,
      })
      return;
    }
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);

  }
  // 每秒执行 时钟函数
  tick = () => {
    const { seconds } = this.state;

    const { bmt, emt, endTime } = this.props;
    if (seconds >= endTime) {
      this.pauseMusic();
      this.setState({
        seconds: bmt ? bmt : 0
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
    const { music, isAudioBarActive, bmt, emt } = this.props;
    const { isPause } = this.state;
    console.log('audio-bar', this.state);
    console.log('endTime', this.props.endTime);
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