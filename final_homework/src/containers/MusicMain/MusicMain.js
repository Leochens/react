import React, { Component } from 'react';
import './MusicMain.less';
import SelectBar from '../../components/SelectBar/SelectBar';
import MusicList from '../../components/MusicList/MusicList';
import ToolBar from '../../components/ToolBar/ToolBar';
import Images from '../../contants/Images';
import AudioBar from '../../components/AudioBar/AudioBar';



export default class MusicMain extends Component {
  state = {};

  getTools = () => {
    const { ui, UiActions, ToolActions } = this.props;
    return [
      {
        title: '播放',
        icon: Images.btnNewPlay,
        iconAc: Images.btnNewPlayAc,
        isActive: ui.play,
        action: ToolActions.actionPlayMusic
      },
      {
        title: '重命名',
        icon: Images.btnRename,
        iconAc: Images.btnRenameAc,
        isActive: ui.rename,
        action: () => { }
      },
      {
        title: '选取片段',
        icon: Images.btnCut,
        iconAc: Images.btnCutAc,
        isActive: ui.slice,
        action: () => { }
      },
      {
        title: '送给朋友',
        icon: Images.btnShare,
        iconAc: Images.btnShareAc,
        isActive: ui.share,
        action: () => { }
      },
      {
        title: '删除',
        icon: Images.btnDelete,
        iconAc: Images.btnDeleteAc,
        isActive: ui.delete,
        action: UiActions.actionShowModal
      },
    ];
  }

  render() {
    const {
      myMusics,
      recommendMusics,
      currentMultipleSelectedMusicIds,
      currentSingleSelectedId,
      SelectActions,
      UiActions,
      ui,
      audio
    } = this.props;
    return (
      <div className="wrapper">
        <SelectBar
          SelectActions={SelectActions}
          isMultipleSelect={ui.isMultipleSelect}
        />
        <MusicList
          title={"我的音乐"}
          musics={myMusics}
          currentMultipleSelectedMusicIds={currentMultipleSelectedMusicIds}
          currentSingleSelectedId={currentSingleSelectedId}
          SelectActions={SelectActions}
          ui={ui}
          UiActions={UiActions}
        />
        <MusicList
          title={"推荐音乐"}
          musics={recommendMusics}
          currentMultipleSelectedMusicIds={currentMultipleSelectedMusicIds}
          currentSingleSelectedId={currentSingleSelectedId}
          SelectActions={SelectActions}
          ui={ui}
          UiActions={UiActions}
        />
        <ToolBar
          tools={this.getTools()}
        />
        <AudioBar
          isAudioBarActive={ui.isAudioBarActive}
          music={audio}
          onClose={UiActions.actionCloseAudioBar}
        />
      </div>
    );
  }
}