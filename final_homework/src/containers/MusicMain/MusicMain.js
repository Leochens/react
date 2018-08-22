import React, { Component } from 'react';
import './MusicMain.less';
import SelectBar from '../../components/SelectBar/SelectBar';
import MusicList from '../../components/MusicList/MusicList';
import ToolBar from '../../components/ToolBar/ToolBar';
export default class MusicMain extends Component {
  state = {};

  render() {
    const {
      myMusics,
      recommendMusics,
      currentMultipleSelectedMusicIds,
      currentSingleSelectedId,
      SelectActions,
      UiActions,
      ui
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
        ui={ui}
      />
    </div>
    );
  }
}