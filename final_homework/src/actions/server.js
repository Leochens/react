import { normalize } from 'normalizr';
import * as ActionTypes from '../contants/ActionTypes';
import Schemas from '../shemas';

export const actionUserLogin = mid => {
  return {
    SERVER_API: {
      type: ActionTypes.USER_LOGIN,
      endpoint: '/login',
      params: {
        mid
      },
      IS_LOGIN:true
    }
  };
};

export const actionFetchMyMusic = () => {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_MY_MUSIC_LIST,
      endpoint: '/music/my_list',
      params: {
        // token
      },
      normalizeFunc: json => {
        const myMusics = normalize(json.list, Schemas.musics);
        // console.log(myMusics);
        return myMusics;
      },
      afterLogin:true
    }
  };
};

export const actionFetchRecommendMusic = () => {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_RECOMMEND_MUSIC_LIST,
      endpoint: '/music/recommend_list',
      params: {
        // token
      },
      normalizeFunc: json => {
        const recommendMusics = normalize(json.list, Schemas.musics);
        // console.log(recommendMusics);
        return recommendMusics;
      },
      afterLogin:true

    }
  };
};


export const actionLoginAndFetchMusic = mid => {
  return (dispatch) => {
    dispatch(actionUserLogin(mid));
    dispatch(actionFetchMyMusic());
    dispatch(actionFetchRecommendMusic());
  }
}