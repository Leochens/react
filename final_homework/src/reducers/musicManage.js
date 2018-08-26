import * as ActionTypes from '../contants/ActionTypes';
import createReducer from './UTIL/createReducer';
import Toast from '../components/Toast/Toast';
import { deleteArrayItem } from '../tools';
const initState = {
  myMusicIds: [],
  recommendMusicIds: [],
  currentMultipleSelectedMusicIds: [],
  currentSingleSelectedId: 0,
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
const setMultipleSelectedMusicIds = (state, action) => {
  const { id } = action;
      const currentMultipleSelectedMusicIds = state.currentMultipleSelectedMusicIds.slice();
      // 如果有就剔除 没有就添加
      if (currentMultipleSelectedMusicIds.includes(id)) {
        const index = currentMultipleSelectedMusicIds.indexOf(id);
        currentMultipleSelectedMusicIds.splice(index, 1);
      } else {
        if (currentMultipleSelectedMusicIds.length === 5) {
          // 最多选择5首
          // TODO: 此时应该提示用户
          Toast.info('最多选择5首');
          return state;
        }
        currentMultipleSelectedMusicIds.push(id);
      }

      return {
        ...state,
        currentMultipleSelectedMusicIds
      }
 }
const setSingleSelectedMusicId = (state, action) => {
  const { id } = action;
  return {
    ...state,
    currentSingleSelectedId: id
  }
 }
const changeToSingleSelect = (state, action) => {
  return {
    ...state,
    currentSingleSelectedId: state.currentMultipleSelectedMusicIds[0],
    currentMultipleSelectedMusicIds: []
  }
}
const changeToMultipleSelect = (state, action) => {
  // 触发多选时要记得把单选时选中的那个加入到多选列表里
      // 如果单选的那个元素已经被删了 那么此时多选数组就是一个空数组
      return {
        ...state,
        currentMultipleSelectedMusicIds: state.currentSingleSelectedId ? [
          state.currentSingleSelectedId
        ] : []
      }
}
const deleteMusic = (state, action) => {
  const { isMultipleSelect } = action;
  const {
    currentMultipleSelectedMusicIds: mId,
    currentSingleSelectedId: sId,
    myMusicIds
  } = state;
  let flag = true;  // 判断是否把当前单选置0
  const newMyMusicIds = myMusicIds.slice();
  const _mId = mId.slice();
  if (isMultipleSelect) { // 多选
    if (mId.includes(sId)) {
      flag = false;  // 多选删除中包含当前的单选 单选要置零
    }
    mId.forEach(id => {
      deleteArrayItem(newMyMusicIds, id);
    });
  } else {  // 单选
    deleteArrayItem(newMyMusicIds, sId);
    deleteArrayItem(_mId, sId);
    flag = false; // 删除当前单选 单选要置0
  }
  return {
    ...state,
    myMusicIds: newMyMusicIds,
    currentMultipleSelectedMusicIds: isMultipleSelect ? [] : _mId,
    currentSingleSelectedId: flag ? sId : 0
  }
}


const musicManage = createReducer(initState, {
  [`${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`]: fetchMyMusicList,
  [`${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`]: fetchRecommendList,
  [ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS]: setMultipleSelectedMusicIds,
  [ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID]: setSingleSelectedMusicId,
  [ActionTypes.DELETE_MUSIC]: deleteMusic,
  [ActionTypes.CHANGE_TO_MULTIPLE_SELECT]: changeToMultipleSelect,
  [ActionTypes.CHANGE_TO_SINGLE_SELECT]: changeToSingleSelect
})
export default musicManage;
