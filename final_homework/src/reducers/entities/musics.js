import * as ActionTypes from '../../contants/ActionTypes';
import Toast from '../../components/Toast/Toast';
import Immutable from 'immutable';
const initState = Immutable.fromJS({});

const musics = (state = initState, action) => {
  switch (action.type) {
    case `${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`: {
      const { musics } = action.response.entities;
      return state.merge(musics);
    }

    case `${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`: {
      const { musics } = action.response.entities;
      return state.merge(musics);
    }

    case ActionTypes.RENAME_MUSIC: {
      const { id } = action;
      let { newName } = action;
      if (newName === '') {
        Toast.info('音乐名不能为空!');
        return state;
      }
      if (newName.indexOf('.mp3') === -1) {
        newName += '.mp3';
      }
      return state.setIn([id, 'name'], newName);
    }

    case ActionTypes.CLEAR_SLICE_MUSIC: {
      const { id } = action;
      return state.setIn([id,'emt'],0).setIn([id,'bmt'],0);
    }
    case ActionTypes.SLICE_MUSIC: {
      const { id, startPos, endPos } = action;
      return state.setIn([id,'emt'],endPos).setIn([id,'bmt'],startPos);
    }
    default: return state;
  }
};

export default musics;
