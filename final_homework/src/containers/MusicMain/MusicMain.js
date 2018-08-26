import React, { Component } from 'react';
import './MusicMain.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

import SelectBar from '../../components/SelectBar/SelectBar';
import MusicList from '../../components/MusicList/MusicList';
import ToolBar from '../../components/ToolBar/ToolBar';
import Images from '../../contants/Images';
import ToolPane from '../../components/ToolPena/ToolPena';


class MusicMain extends Component {
  state = {};
  getTools = () => {
    const { ui, UiActions } = this.props;
    return [
      {
        title: '播放',
        icon: Images.btnNewPlay,
        iconAc: Images.btnNewPlayAc,
        isActive: ui.play,
        action: () => UiActions.actionSetCurrentTool('play')
      },
      {
        title: '重命名',
        icon: Images.btnRename,
        iconAc: Images.btnRenameAc,
        isActive: ui.rename,
        action: () => UiActions.actionSetCurrentTool('rename')
      },
      {
        title: '选取片段',
        icon: Images.btnCut,
        iconAc: Images.btnCutAc,
        isActive: ui.slice,
        action: () => UiActions.actionSetCurrentTool('slice')
      },
      {
        title: '送给朋友',
        icon: Images.btnShare,
        iconAc: Images.btnShareAc,
        isActive: ui.share,
        action: () => UiActions.actionSetCurrentTool('share')
      },
      {
        title: '删除',
        icon: Images.btnDelete,
        iconAc: Images.btnDeleteAc,
        isActive: ui.delete,
        action: () => UiActions.actionSetCurrentTool('delete')
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
      ToolActions,
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
        <ToolPane
          isToolPenaActive={ui.isToolPenaActive}
          currentTool={ui.currentTool}
          music={audio}
          onClose={UiActions.actionCloseAudioBar}
          ToolActions={ToolActions}
          UiActions={UiActions}
          ui={ui}
        />

      </div>
    );
  }
}
const mapStateToProps = state => {
  const {
    musicManage: {
      myMusicIds,
      recommendMusicIds,
      currentMultipleSelectedMusicIds,
      currentSingleSelectedId
    },
    ui,
    login: userData,
    entities: {
      musics
    },
    audio
  } = state;

  const myMusics = myMusicIds.map(id => musics[id]);
  const recommendMusics = recommendMusicIds.map(id => musics[id]);
  return {
    user: userData,
    myMusics,
    recommendMusics,
    currentMultipleSelectedMusicIds,
    currentSingleSelectedId,
    ui,
    audio
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ServerActions: bindActionCreators(Actions.server, dispatch),
    SelectActions: bindActionCreators(Actions.select, dispatch),
    UiActions: bindActionCreators(Actions.ui, dispatch),
    ToolActions: bindActionCreators(Actions.tools, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicMain);
