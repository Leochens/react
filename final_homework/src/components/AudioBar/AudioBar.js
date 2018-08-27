import React, { Component } from 'react';
import './AudioBar.less';
import Slider from '../Slider/Slider';
import Images from '../../contants/Images';
import { secondToMinutes, addPreZero } from '../../tools';


const getTimeString = (cur, end) => {
  const curSecAndMin = secondToMinutes(cur).split(':');
  const endSecAndMin = secondToMinutes(end).split(':');
  const _cur = addPreZero(curSecAndMin[0]) + ':' + addPreZero(curSecAndMin[1]);
  const _end = addPreZero(endSecAndMin[0]) + ':' + addPreZero(endSecAndMin[1]);
  return `${_cur} / ${_end}`
}

export default class AudioBar extends Component {
  state = {
    duration: 0,
    curentSeconds: 0,
    isPause: true,
    isLoading: false,
    endTime: 0,
  };

  static defaultProps = {
    isAudioBarActive: true, // 是否显示音乐播放器
    autoplay: false,  // 是否自动播放
    src: '',  // 音频源
    begin: 0, // 开始时间
    end: 0, // 结束时间
    loop: true // 是否循环播放
  }

  // 暂停
  pauseMusic = () => {
    const { audio } = this;
    if (!audio) return;
    audio.pause();
    this.setState({
      isPause: true,
    });
  }
  // 播放
  playMusic = () => {
    const { audio } = this;
    const { curentSeconds, duration } = this.state;
    const { begin, end } = this.props;
    if (!audio || this.isLoading) return;
    audio.currentTime = curentSeconds ? curentSeconds : begin;
    audio.play();
    this.setState({
      curentSeconds: begin ? begin : curentSeconds,
      endTime: end ? end : duration,
      duration: audio.duration,
      isPause: false,
      sliderIsDisabled: false
    });
  }
  // 切换暂停播放
  handelTogglePlay = () => {
    if (this.state.isPause) {
      this.playMusic();
    } else {
      this.pauseMusic();
    }
  }
  // 交给slider去回调的api 当slider进度改变 那么当前的播放时间也要改变
  setAudioPos = pos => {
    const { audio } = this;
    const curTime = this.state.duration * (pos / 100).toFixed(2) * 1
    audio.currentTime = curTime;
    this.setState({
      curentSeconds: curTime,
      isPause: false
    });
    if (audio.paused) {
      audio.play()
    }
  }

  // 更新函数 回调父级的监听函数onChange
  handleTimeUpdate = (e) => {
    const { onTimeChange, begin, loop } = this.props;
    const { endTime } = this.state;
    const duration = this.audio.duration;
    const curTime = e.target.currentTime;
    if ((curTime + 1 >= endTime || curTime <= begin)) {
      if (!loop) {
        this.pauseMusic();
        return;
      }
      e.target.currentTime = begin ? begin : 0;
      this.setState({
        curentSeconds: begin ? begin : 0
      });
    }
    const timeString = getTimeString(curTime, duration);
    onTimeChange && onTimeChange(timeString);
    this.setState({
      curentSeconds: curTime
    });
  }

  componentDidMount() {
    const { autoplay } = this.props;
    if (autoplay) this.playMusic();
    this.setState({
      isLoading: true,
    })
  }

  // 初始化 包括拿到音乐时长 和确定结束地点
  handleAudioCanPlay = () => {
    const { begin, end } = this.props;
    const { curentSeconds } = this.state;
    this.setState({
      isLoading: false,
      duration: this.audio.duration,
      curentSeconds: begin ? begin : curentSeconds,
      endTime: end ? end : this.audio.duration
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.end !== nextProps.end) {
      this.setState({
        endTime: nextProps.end
      })
    }
  }

  // 等待音频加载结束后 能够获得音频时间 渲染slider
  renderSlider = () => {
    const { begin, end } = this.props;
    const { isLoading, curentSeconds } = this.state;
    if (!this.audio || isLoading) {
      return null
    }
    const duration = this.audio.duration;

    return (
      <Slider
        defaultValue={~~((curentSeconds / duration) * 100)}
        onChange={this.setAudioPos}
        showSliceStartFlag={begin}
        showSliceEndFlag={(end !== 0 && Math.ceil(end) !== Math.ceil(duration))}
        disabled={false}
        begin={{
          icon: Images.cutMusicStart,
          pos: (begin / duration) * 100
        }}
        end={{
          icon: Images.cutMusicFinish,
          pos: (end / duration) * 100
        }}
      />
    );
  }

  render() {
    const { isAudioBarActive, src } = this.props;
    const { isPause } = this.state;
    if (!isAudioBarActive) {
      return null;
    }
    // console.log(this.state);

    return (
      <div className="play-bar">
        <audio
          ref={self => this.audio = self}
          src={src}
          onTimeUpdate={this.handleTimeUpdate}
          onCanPlay={this.handleAudioCanPlay}
        />
        <span
          className="toggle-play"
          onClick={this.handelTogglePlay}
        >
          <img src={isPause ? Images.btnPlay : Images.btnPause} alt="" />
        </span>
        <div className="slider">
          {this.renderSlider()}
        </div>
      </div>
    );
  }
}