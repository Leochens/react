import React, { Component } from 'react';
import './MusicList.less';
import ListItem from '../ListItem/ListItem';


export default class MusicList extends Component {

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

  handleMultipleSelect = id => {

  }
  judgeItemIsMultipleSelected = () => {

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
      isMultipleSelect
    } = this.props;
    console.log(this.props);
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
        isMultipleSelect={isMultipleSelect}
        order={isMultipleSelect
          ? currentMultipleSelectedMusicIds.indexOf(music.id)
          : null}
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