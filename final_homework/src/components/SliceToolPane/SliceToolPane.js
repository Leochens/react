import React, { Component } from 'react';
import './SliceToolPane.less';
import AudioBar from '../AudioBar/AudioBar';
import Images from '../../contants/Images';
import { secondToMinutes } from '../../tools';

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

  renderSliceTools = () => {
    const { music, SelectActions } = this.props;
    return (
      <div className="slice-pane-tools">
        <span
          className="item"
        // onClick={SelectActions.}
        >
          <img src={Images.btnCutMusicStart} alt="" />
          <div className="descript">标记起点</div>
          <div className="time">{secondToMinutes(music.bmt)}</div>
        </span>
        <span
          className="item"
          onClick={() => SelectActions.actionClearSliceMusic(music.id)}
        >
          <img src={Images.btnClear} alt="" />
          <div className="descript">清除</div>
          <div className="time">&nbsp;</div>
        </span>
        <span
          className="item"
        // onClick={SelectActions.}
        >
          <img src={Images.btnCutMusicFinish} alt="" />
          <div className="descript">标记终点</div>
          <div className="time">{secondToMinutes(music.emt)}</div>
        </span>
      </div>
    )
  }

  render() {
    const {
      music,
      isToolPenaActive,
    } = this.props;
    console.log('tool next music', music);
    return (
      <div className="slice-pane">
        <div className="slice-pane-audio-head">
          {this.renderSliceTools()}
          <AudioBar
            music={music}
            isAudioBarActive={isToolPenaActive}
            autoplay={false}
            onTimeChange={this.getAudioTime}
          />
          <div className="slice-pane-audio-time">{this.state.timeString}</div>
        </div>

        <span className="slice-pane-ok">确认</span>
      </div >
    );
  }
}