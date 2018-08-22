import React, { Component } from 'react';
import './MusicList.less';
import ListItem from '../ListItem/ListItem';


export default class MusicList extends Component {
  state = {};

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
    const { musics } = this.props;
    return musics.map((music,idx)=>(
      <ListItem 
        key={`music_${idx}`}
        data={music}
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