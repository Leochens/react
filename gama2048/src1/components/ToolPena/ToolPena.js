import React, { Component } from 'react';
import './ToolPane.less';
import PlayToolPane from '../PlayToolPane/PlayToolPane';
import SliceToolPane from '../SliceToolPane/SliceToolPane';
import Modal from '../Modal/Modal';
import * as TEXT from '../../contants/Text';

export default class ToolPane extends Component {
  getClassName = () => {
    const { ui: { isToolPenaActive } } = this.props;
    return `audio-bar-wrapper${isToolPenaActive ? ' ' : ' hide'}`;
  }

  handleInputDone = newName => {
    const { ToolActions, music: { id } } = this.props;
    ToolActions.actionRenameMusic(id, newName);
  }

  renderTool = () => {
    const {
      music,
      onClose,
      ui: {
        currentTool,
        isToolPenaActive,
        isMultipleSelect,
        currentMultipleSelectedMusicIds: mIds
      },
      ToolActions,
      UiActions
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
            inputTip={TEXT.RENAME_MUSIC_TIP}
            onInputDone={this.handleInputDone}
            onCancel={onClose}
            isActive={isToolPenaActive}
            defaultValue={music.name.split('.mp3')[0]}
          />
        );
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
            content={TEXT.SHARE_MUSIC_INFO(music.name)}
            isActive={isToolPenaActive}
            onOk={onClose}
            onCancel={onClose}
          />
        );
      case 'delete':
        return (
          <Modal
            type="message"
            content={TEXT.DELETE_MUSIC_CONFIRM(isMultipleSelect ? `${mIds.length}首` : music.name)}
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
