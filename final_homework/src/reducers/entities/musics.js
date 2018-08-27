import * as ActionTypes from '../../contants/ActionTypes';
import Toast from '../../components/Toast/Toast';
// import { fromJS } from 'immutable'

const musics = (state = {}, action) => {
  switch (action.type) {
    case `${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`: {
      const { musics } = action.response.entities;
      return {
        ...state,
        ...musics
      };
    }

    case `${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`: {
      const { musics } = action.response.entities;
      return {
        ...state,
        ...musics
      };
    }

    case ActionTypes.RENAME_MUSIC: {
      const { id } = action;
      let newName = action.newName;
      if (newName === '') {
        Toast.info('音乐名不能为空!');
        return state;
      }
      if (newName.indexOf('.mp3') === -1) {
        newName += '.mp3';
      }
      return {
        ...state,
        [id]: {
          ...state[id],
          name: newName
        }
      }
    }

    case ActionTypes.CLEAR_SLICE_MUSIC: {
      const { id } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          emt: 0,
          bmt: 0
        }
      }
    }
    case ActionTypes.SLICE_MUSIC: {
      const { id, startPos, endPos } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          bmt: startPos,
          emt: endPos
        }
      }
    }
    default: return state;
  }
};

export default musics;
