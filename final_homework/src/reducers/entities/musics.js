import * as ActionTypes from '../../contants/ActionTypes';
// import { fromJS } from 'immutable'

const musics = (state = {}, action) => {
  switch (action.type) {
    case `${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`: {
      // console.log('拉取我的音乐成功', action.response.entities.musics);
      const { musics } = action.response.entities;
      return {
        ...state,
        ...musics
      };
    }

    case `${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`: {
      // console.log('拉取推荐音乐成功', action.response.entities.musics);
      const { musics } = action.response.entities;
      return {
        ...state,
        ...musics
      };
    }

    case ActionTypes.RENAME_MUSIC: {
      const { id, newName } = action;
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
