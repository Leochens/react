import * as ActionTypes from '../contants/ActionTypes';

export const actionUserLogin = mid => {
  return {
    SERVER_API: {
      type: ActionTypes.USER_LOGIN,
      endpoint: '/login',
      params: {
        mid
      }
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
      }
    }
  };
};
