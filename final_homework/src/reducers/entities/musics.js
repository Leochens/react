import * as ActionTypes from '../../contants/ActionTypes';


const musics = (state = {}, action) => {
  switch (action.type) {
    case `${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`: {
      console.log('拉取我的音乐成功', action.response.entities.musics);
      const { musics } = action.response.entities;
      return {
        ...state,
        ...musics
      };
    }

    case `${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`: {
      console.log('拉取推荐音乐成功', action.response.entities.musics);
      const { musics } = action.response.entities;
      return {
        ...state,
        ...musics
      };
    }

    default: return state;
  }
};

export default musics;
