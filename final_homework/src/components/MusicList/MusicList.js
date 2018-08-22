import React, { Component } from 'react';
import './MusicList.less';
import ListItem from '../ListItem/ListItem';


export default class MusicList extends Component {

  componentDidMount() {
    const { currentSingleSelectedId } = this.props;
    // this.updateToolState(currentSingleSelectedId);
  }

  updateToolState = musicId => {
    const { musics, isMultipleSelect, actionUpdateToolState } = this.props;
    if(!musics.length) {
      return;
    }
    console.log('musics',musics);
    const data = musics[musicId];
    const newToolState = {
      play: isMultipleSelect ? false : true,
      rename: data.plp || !data.med ? false : true,
      slice: data.med ? true : false,
      share: data.med ? true : false,
      delete: data.med ? true : false
    }
    actionUpdateToolState && actionUpdateToolState(newToolState);
  }

  renderListTitle = () => {
    const { title } = this.props;
    if (title) {
      return (
        <div className="list-title">
          {title}
        </div>
      )
    } else return null;
  }

  renderListItems = () => {
    const {
      musics,
      currentSingleSelectedId,
      currentMultipleSelectedMusicIds,
      SelectActions: {
        actionSetSingleSelectedMusicId,
        actionSetMultipleSelectedMusicIds
      },
      UiActions: {
        actionUpdateToolState
      },
      ui: {
        isMultipleSelect
      }
    } = this.props;
    return musics.map((music, idx) => (
      <ListItem
        key={`music_${idx}`}
        id={music.id}
        data={music}
        onSelect={isMultipleSelect
          ? actionSetMultipleSelectedMusicIds
          : actionSetSingleSelectedMusicId}

        isSelected={isMultipleSelect
          ? currentMultipleSelectedMusicIds.includes(music.id)
          : music.id === currentSingleSelectedId}

        order={isMultipleSelect
          ? currentMultipleSelectedMusicIds.indexOf(music.id)
          : null}

        actionUpdateToolState={actionUpdateToolState}
        isMultipleSelect={isMultipleSelect}
        updateToolState={this.updateToolState}
      />
    ))
  }

  render() {
    return (
      <div className="music-list">
        {this.renderListTitle()}
        {this.renderListItems()}
      </div>
    );
  }
}