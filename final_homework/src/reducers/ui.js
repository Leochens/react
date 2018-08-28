import * as ActionTypes from '../contants/ActionTypes';
import createReducer from './util/createReducer';
import Toast from '../components/Toast/Toast';
import Immutable from 'immutable';

const getToolPaneState = curMusic => {
  return {
    play: true,
    rename: !(curMusic.plp || !curMusic.med),
    slice: !!curMusic.med,
    share: !!curMusic.med,
    delete: !!curMusic.med
  };
};

const disabled = Immutable.fromJS({
  play: false,
  rename: false,
  slice: false,
  share: false,
  delete: false
})

const initState = Immutable.fromJS({
  toolState: {
    play: false,
    rename: false,
    slice: false,
    share: false,
    delete: false
  },
  isMultipleSelect: false,
  isToolPenaActive: false,
  currentTool: '',
  currentMultipleSelectedMusicIds: [],
  currentSingleSelectedId: 0
});

// 设置多选
const setMultipleSelectedMusicIds = (state, action) => {
  const { music: { id } } = action;
  let mIds = state.get('currentMultipleSelectedMusicIds');
  // 如果有就剔除 没有就添加
  if (mIds.toJS().includes(id)) {
    const index = mIds.indexOf(id);
    mIds = mIds.delete(index);
  } else {
    if (mIds.size === 5) {
      // 最多选择5首
      // TODO: 此时应该提示用户
      Toast.info('最多选择5首');
      return state;
    }
    mIds = mIds.push(id);
  }
  return state
    .set('currentMultipleSelectedMusicIds', mIds)
    .setIn(['toolState','delete'], !!mIds.size)
};

// 设置单选 
const setSingleSelectedMusicId = (state, action) => {
  const { music } = action;
  const toolState = Immutable.fromJS(getToolPaneState(music));
  return state
    .set('currentSingleSelectedId', music.id)
    .set('toolState', toolState);
};

// 切换到单选
const changeToSingleSelect = state => {
  const mIds = state.get('currentMultipleSelectedMusicIds');
  return state
    .set('isMultipleSelect', false)
    .set('currentSingleSelectedId', mIds.size ? mIds.get(0) : 0)
    .set('currentMultipleSelectedMusicIds', Immutable.fromJS([]));
};

// 切换到多选
const changeToMultipleSelect = state => {
  const mIds = state.get('currentMultipleSelectedMusicIds');
  const sId = state.get('currentSingleSelectedId');

  return state
    .set('isMultipleSelect', true)
    .set('currentMultipleSelectedMusicIds', sId ? mIds.push(sId) : Immutable.fromJS([]))
    .set('toolState', disabled)
    .setIn(['toolState', 'delete'], !!sId);
};

// 关闭工具面板
const closeAudioBar = state => {
  return state.set('isToolPenaActive', false);
};

// 设置当前工具
const setCurrentTool = (state, action) => {
  const { tool } = action;
  return state.set('currentTool', tool).set('isToolPenaActive', true);
};

const deleteMusic = state => {
  const isMultipleSelect = state.get('isMultipleSelect');
  const sId = state.get('currentSingleSelectedId');
  let mIds = state.get('currentMultipleSelectedMusicIds');
  let flag = true;
  let newState = state;

  if (isMultipleSelect) { // 多选
    if (mIds.toJS().includes(sId)) {
      flag = false; 
    }
    mIds.clear();
  } else { // 单选
    mIds = mIds.delete(mIds.indexOf(sId));
    flag = false; 
  }

  // 删除完都置灰
  return newState
    .set('currentMultipleSelectedMusicIds', isMultipleSelect ? Immutable.fromJS([]) : mIds)
    .set('currentSingleSelectedId', flag ? sId : 0)
    .set('toolState',disabled)
};

const ui = createReducer(initState, {
  [ActionTypes.CHANGE_TO_SINGLE_SELECT]: changeToSingleSelect,
  [ActionTypes.CHANGE_TO_MULTIPLE_SELECT]: changeToMultipleSelect,
  [ActionTypes.CLOSE_AUDIOBAR]: closeAudioBar,
  [ActionTypes.SET_CURRENT_TOOL]: setCurrentTool,
  [ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS]: setMultipleSelectedMusicIds,
  [ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID]: setSingleSelectedMusicId,
  [ActionTypes.CHANGE_TO_MULTIPLE_SELECT]: changeToMultipleSelect,
  [ActionTypes.CHANGE_TO_SINGLE_SELECT]: changeToSingleSelect,
  [ActionTypes.DELETE_MUSIC]: deleteMusic
});


export default ui;
