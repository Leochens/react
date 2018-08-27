import React, { Component } from 'react';
import './ToolPane.less';
import PlayToolPane from '../PlayToolPane/PlayToolPane';
import SliceToolPane from '../SliceToolPane/SliceToolPane';
import Modal from '../Modal/Modal';

export default class ToolPane extends Component {
  getClassName = () => {
    const { ui: { isToolPenaActive } } = this.props;
    return 'audio-bar-wrapper' + (isToolPenaActive ? ' ' : ' hide')
  }
  handleInputDone = newName => {
    const { ToolActions, music: { id } } = this.props;
    ToolActions.actionRenameMusic(id, newName);
  }
  renderTool = () => {
    const {
      music,
      onClose,
      ui: { currentTool, isToolPenaActive },
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
        return (
          <Modal
            type="message"
            content={`成功发送${music.name}给朋友`}
            isActive={isToolPenaActive}
            onOk={onClose}
            onCancel={onClose}
          />
        )
      case 'delete':
        const {
          ui: {
            isMultipleSelect,
            currentMultipleSelectedMusicIds: mIds,
          }
        } = this.props;

        return (
          <Modal
            type="message"
            content={`确认删除${isMultipleSelect ? mIds.length + '首' : music.name}音乐吗？`}
            isActive={isToolPenaActive}
            onOk={() => this.props.ToolActions.actiondeleteMusic(isMultipleSelect ? mIds : music.id)}
            onCancel={onClose}
          />
        );
      default: return null;
    }
  }
  render() {

    if (!this.props.ui.isToolPenaActive) {
      return null;
    }
    return (
      <div className={this.getClassName()}>
        {this.renderTool()}
      </div>
    );
  }
}