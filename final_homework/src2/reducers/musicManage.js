import * as ActionTypes from '../contants/ActionTypes';
import createReducer from './util/createReducer';
// import Toast from '../components/Toast/Toast';

import { deleteArrayItem } from '../tools';
const initState = {
  myMusicIds: [],
  recommendMusicIds: [],
}
const fetchMyMusicList = (state, action) => {
  const { result: myMusicIds } = action.response;
  return {
    ...state,
    myMusicIds
  };
}
const fetchRecommendList = (state, action) => {
  const { result: recommendMusicIds } = action.response;
  return {
    ...state,
    recommendMusicIds
  };
}
const deleteMusic = (state, action) => {
  const { ids } = action;
  const newMyMusicIds = state.myMusicIds.slice();
  if (ids.length) { // 多选
    ids.forEach(id => {
      deleteArrayItem(newMyMusicIds, id);
    });
  } else {  // 单选
    deleteArrayItem(newMyMusicIds, ids);
  }
  return {
    ...state,
    myMusicIds: newMyMusicIds,
  }
}
const musicManage = createReducer(initState, {
  [`${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`]: fetchMyMusicList,
  [`${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`]: fetchRecommendList,
  [ActionTypes.DELETE_MUSIC]: deleteMusic,
});
export default musicManage;
