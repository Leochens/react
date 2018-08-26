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
      actionWaitQueue: [actionFetchMyMusic, actionFetchRecommendMusic]
    }
  };
};

export const actionFetchMyMusic = token => {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_MY_MUSIC_LIST,
      endpoint: '/music/my_list',
      params: {
        token
      },
      normalizeFunc: json => {
        const myMusics = normalize(json.list, Schemas.musics);
        console.log(myMusics);
        return myMusics;
      }
    }
  };
};

export const actionFetchRecommendMusic = token => {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_RECOMMEND_MUSIC_LIST,
      endpoint: '/music/recommend_list',
      params: {
        token
      },
      normalizeFunc: json => {
        const recommendMusics = normalize(json.list, Schemas.musics);
        console.log(recommendMusics);
        return recommendMusics;
      }
    }
  };
};

export const actionTestLogin = (mid) => {
  return (dispatch, getState) => {
    dispatch(actionUserLogin(mid))
  }
}