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
import * as TEXT from '../../contants/Text';


class MusicMain extends Component {
  state = {};

  getTools = () => {
    const { ui: { toolState }, UiActions } = this.props;
    return [
      {
        title: TEXT.PLAY_MUSIC,
        icon: Images.btnNewPlay,
        iconAc: Images.btnNewPlayAc,
        isActive: toolState.play,
        action: () => UiActions.actionSetCurrentTool('play')
      },
      {
        title: TEXT.RENAME_MUSIC,
        icon: Images.btnRename,
        iconAc: Images.btnRenameAc,
        isActive: toolState.rename,
        action: () => UiActions.actionSetCurrentTool('rename')
      },
      {
        title: TEXT.SLICE_MUSIC,
        icon: Images.btnCut,
        iconAc: Images.btnCutAc,
        isActive: toolState.slice,
        action: () => UiActions.actionSetCurrentTool('slice')
      },
      {
        title: TEXT.SHARE_MUSIC,
        icon: Images.btnShare,
        iconAc: Images.btnShareAc,
        isActive: toolState.share,
        action: () => UiActions.actionSetCurrentTool('share')
      },
      {
        title: TEXT.DELETE_MUSIC,
        icon: Images.btnDelete,
        iconAc: Images.btnDeleteAc,
        isActive: toolState.delete,
        action: () => UiActions.actionSetCurrentTool('delete')
      }
    ];
  }

  render() {
    const {
      myMusics,
      recommendMusics,
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
          title={TEXT.MY_MUSIC}
          musics={myMusics}
          SelectActions={SelectActions}
          UiActions={UiActions}
          ui={ui}
        />
        <MusicList
          title={TEXT.RECOMMENT_MUSIC}
          musics={recommendMusics}
          SelectActions={SelectActions}
          UiActions={UiActions}
          ui={ui}
        />
        <ToolBar
          tools={this.getTools()}
        />
        <ToolPane
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
  // const _state = state.toJS();
  // const {
  //   login: userData,
  //   entities: {
  //     musics
  //   },
  //   audio
  // } = _state;
  const myMusicIds = state.getIn(['musicManage', 'myMusicIds']).toJS();
  const recommendMusicIds = state.getIn(['musicManage', 'recommendMusicIds']).toJS();
  const ui = state.get('ui').toJS();
  const userData = state.get('login').toJS();
  const musics = state.getIn(['entities', 'musics']).toJS();
  const audio = state.get('audio').toJS();

  const myMusics = myMusicIds.map(id => musics[id]);
  const recommendMusics = recommendMusicIds.map(id => musics[id]);
  return {
    user: userData,
    myMusics,
    recommendMusics,
    ui,
    audio
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ServerActions: bindActionCreators(Actions.server, dispatch),
    SelectActions: bindActionCreators(Actions.select, dispatch),
    UiActions: bindActionCreators(Actions.ui, dispatch),
    ToolActions: bindActionCreators(Actions.tools, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicMain);
