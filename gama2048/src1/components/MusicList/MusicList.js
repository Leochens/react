import React, { Component } from 'react';
import './MusicList.less';
import ListItem from '../ListItem/ListItem';


export default class MusicList extends Component {
  handleSelect = music => {
    const {
      SelectActions: {
        actionSetSingleSelectedMusicId,
        actionSetMultipleSelectedMusicIds
      },
      ui: {
        isMultipleSelect
      }
    } = this.props;

    if (isMultipleSelect) {
      actionSetMultipleSelectedMusicIds(music);
    } else {
      actionSetSingleSelectedMusicId(music);
    }
  }

  renderListTitle = () => {
    const { title } = this.props;
    if (title) {
      return (
        <div className="list-title">
          {title}
        </div>
      );
    }
    return null;
  }

  renderListItems = () => {
    const {
      musics,
      ui: {
        isMultipleSelect,
        currentSingleSelectedId,
        currentMultipleSelectedMusicIds
      }
    } = this.props;
    return musics.map((music, idx) => (
      <ListItem
        key={`music_${idx}`}
        id={music.id}
        data={music}
        onSelect={this.handleSelect}

        isSelected={isMultipleSelect
          ? currentMultipleSelectedMusicIds.includes(music.id)
          : music.id === currentSingleSelectedId}

        order={isMultipleSelect
          ? currentMultipleSelectedMusicIds.indexOf(music.id)
          : null}

        isMultipleSelect={isMultipleSelect}
        updateToolState={this.updateToolState}
      />
    ));
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
