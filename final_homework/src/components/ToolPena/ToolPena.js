import React, { Component } from 'react';
import './ToolPane.less';
import PlayToolPane from '../PlayToolPane/PlayToolPane';

export default class ToolPane extends Component {
  // 交给AudioBar去回调 来改变当前时间串(播放事件/结束时间)

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
      <PlayToolPane 
         music={music}
         isToolPenaActive={isToolPenaActive}
         onClose={onClose}
      />
      </div>
    );
  }
}