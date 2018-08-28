import * as ActionTypes from '../contants/ActionTypes';
import createReducer from './util/createReducer';
// import Toast from '../components/Toast/Toast';
import Immutable from 'immutable';

const initState = Immutable.fromJS({
  myMusicIds: [],
  recommendMusicIds: []
});

const fetchMyMusicList = (state, action) => {
  const { result: myMusicIds } = action.response;
  return state
    .set('myMusicIds', Immutable.fromJS(myMusicIds));
};

const fetchRecommendList = (state, action) => {
  const { result: recommendMusicIds } = action.response;
  return state
    .set('recommendMusicIds', Immutable.fromJS(recommendMusicIds));
};

const deleteMusic = (state, action) => {
  const { ids } = action;
  let newMyMusicIds = state.get('myMusicIds');
  if (ids.length) { // 多选
    ids.forEach(id => {
      newMyMusicIds = newMyMusicIds.delete(newMyMusicIds.indexOf(id));
    });
  } else { // 单选
    newMyMusicIds = newMyMusicIds.delete(newMyMusicIds.indexOf(ids));
  }
  return state.set('myMusicIds', newMyMusicIds);
};

const musicManage = createReducer(initState, {
  [`${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`]: fetchMyMusicList,
  [`${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`]: fetchRecommendList,
  [ActionTypes.DELETE_MUSIC]: deleteMusic
});

export default musicManage;
