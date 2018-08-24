import React, { Component } from 'react';
import './ToolPane.less';
import PlayToolPane from '../PlayToolPane/PlayToolPane';
import SliceToolPane from '../SliceToolPane/SliceToolPane';

export default class ToolPane extends Component {
  // 交给AudioBar去回调 来改变当前时间串(播放事件/结束时间)

  getClassName = () => {
    const { isToolPenaActive } = this.props;
    return 'audio-bar-wrapper' + (isToolPenaActive ? ' ' : ' hide')
  }

  renderTool = () => {
    const {
      music,
      isToolPenaActive,
      onClose,
      currentTool,
      SelectActions
    } = this.props;
    switch (currentTool) {
      case 'play':
        return (
          <PlayToolPane
            music={music}
            isToolPenaActive={isToolPenaActive}
            onClose={onClose}
          />
        );
      case 'slice':
        return (
          <SliceToolPane
            music={music}
            isToolPenaActive={isToolPenaActive}
            onClose={onClose}
            SelectActions={SelectActions}
          />
        );
      default: return null;
    }
  }
  render() {

    if(!this.props.isToolPenaActive) {
      return null;
    }
    return (
      <div className={this.getClassName()}>
        {this.renderTool()}
      </div>
    );
  }
}