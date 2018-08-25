import React, { Component } from 'react';
import './ToolPane.less';
import PlayToolPane from '../PlayToolPane/PlayToolPane';
import SliceToolPane from '../SliceToolPane/SliceToolPane';
import Modal from '../Modal/Modal';

export default class ToolPane extends Component {
  // 交给AudioBar去回调 来改变当前时间串(播放事件/结束时间)

  getClassName = () => {
    const { isToolPenaActive } = this.props;
    return 'audio-bar-wrapper' + (isToolPenaActive ? ' ' : ' hide')
  }
  handleInputDone = newName => {
    const { ToolActions, music: { id } } = this.props;
    ToolActions.actionRenameMusic(id, newName);
  }
  renderTool = () => {
    const {
      music,
      isToolPenaActive,
      onClose,
      currentTool,
      ToolActions,
      UiActions,
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
      case 'rename':
        return (
          <Modal
            type="input"
            inputTip="请输入新的音乐名称"
            onInputDone={this.handleInputDone}
            onCancel={onClose}
            isActive={isToolPenaActive}
            defaultValue={music.name}
          />
        )
      case 'slice':
        return (
          <SliceToolPane
            music={music}
            isToolPenaActive={isToolPenaActive}
            onClose={onClose}
            ToolActions={ToolActions}
            UiActions={UiActions}
          />
        );
      case 'share':
        // ToolActions.actionShareMusic();
        return;
      case 'delete':
        return (
          <Modal
            type="message"
            content={'确认删除歌曲吗？'}
            isActive={isToolPenaActive}
            onOk={() => this.props.ToolActions.actiondeleteMusic(this.props.ui.isMultipleSelect)}
            onCancel={onClose}
          />
        )
      default: return null;
    }
  }
  render() {

    if (!this.props.isToolPenaActive) {
      return null;
    }
    return (
      <div className={this.getClassName()}>
        {this.renderTool()}
      </div>
    );
  }
}