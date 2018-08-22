import React, { Component } from 'react';
import './MusicList.less';
import ListItem from '../ListItem/ListItem';


export default class MusicList extends Component {
  state = {
    isMultipleSelect: false,
  };

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
      SelectActions: {
        actionSetSingleSelectedMusicId
      }
    } = this.props;
    console.log(this.props);
    return musics.map((music, idx) => (
      <ListItem
        key={`music_${idx}`}
        id={music.id}
        data={music}
        onSelect={actionSetSingleSelectedMusicId}
        isSelected={music.id === currentSingleSelectedId}
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