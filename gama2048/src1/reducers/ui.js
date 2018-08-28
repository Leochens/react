import * as ActionTypes from '../contants/ActionTypes';
import createReducer from './util/createReducer';
import Toast from '../components/Toast/Toast';
import { deleteArrayItem } from '../tools';

const getToolPaneState = curMusic => {
  return {
    play: true,
    rename: !(curMusic.plp || !curMusic.med),
    slice: !!curMusic.med,
    share: !!curMusic.med,
    delete: !!curMusic.med
  };
};
const disabled = {
  play: false,
  rename: false,
  slice: false,
  share: false,
  delete: false
};
const initState = {
  isMultipleSelect: false,
  ...disabled,
  isToolPenaActive: false,
  currentTool: '',
  currentMultipleSelectedMusicIds: [],
  currentSingleSelectedId: 0
};

const setMultipleSelectedMusicIds = (state, action) => {
  const { music: { id } } = action;
  const mIds = state.currentMultipleSelectedMusicIds.slice();

  // 如果有就剔除 没有就添加
  if (mIds.includes(id)) {
    const index = mIds.indexOf(id);
    mIds.splice(index, 1);
  } else {
    if (mIds.length === 5) {
      // 最多选择5首
      // TODO: 此时应该提示用户
      Toast.info('最多选择5首');
      return state;
    }
    mIds.push(id);
  }
  return {
    ...state,
    currentMultipleSelectedMusicIds: mIds,
    delete: !!mIds.length
  };
};
const setSingleSelectedMusicId = (state, action) => {
  const { music } = action;
  const toolState = getToolPaneState(music);
  return {
    ...state,
    ...toolState,
    currentSingleSelectedId: music.id
  };
};
const changeToSingleSelect = state => {
  return {
    ...state,
    isMultipleSelect: false,
    currentSingleSelectedId: state.currentMultipleSelectedMusicIds.length ? state.currentMultipleSelectedMusicIds[0] : 0,
    currentMultipleSelectedMusicIds: []
  };
};
const changeToMultipleSelect = state => {
  return {
    ...state,
    isMultipleSelect: true,
    play: false,
    rename: false,
    slice: false,
    share: false,
    delete: !!state.currentSingleSelectedId,
    currentMultipleSelectedMusicIds: state.currentSingleSelectedId ? [
      state.currentSingleSelectedId
    ] : []
  };
};

const closeAudioBar = state => {
  return {
    ...state,
    isToolPenaActive: false
  };
};
const setCurrentTool = (state, action) => {
  const { tool } = action;
  return {
    ...state,
    currentTool: tool,
    isToolPenaActive: true
  };
};
const playMusic = state => {
  return {
    ...state,
    isToolPenaActive: true
  };
};
const deleteMusic = state => {
  const {
    isMultipleSelect,
    currentSingleSelectedId: sId,
    currentMultipleSelectedMusicIds: mIds
  } = state;
  let flag = true; // 判断是否把当前单选置0
  const _mIds = mIds.slice();

  if (isMultipleSelect) { // 多选
    if (mIds.includes(sId)) {
      flag = false; // 多选删除中包含当前的单选 单选要置零
    }
  } else { // 单选
    deleteArrayItem(_mIds, sId);
    flag = false; // 删除当前单选 单选要置0
  }
  if (!flag) {
    return {
      ...state,
      ...disabled,
      currentMultipleSelectedMusicIds: isMultipleSelect ? [] : _mIds,
      currentSingleSelectedId: flag ? sId : 0
    };
  }
  return {
    ...state,
    currentMultipleSelectedMusicIds: isMultipleSelect ? [] : _mIds,
    currentSingleSelectedId: flag ? sId : 0
  };
};

const ui = createReducer(initState, {
  [ActionTypes.CHANGE_TO_SINGLE_SELECT]: changeToSingleSelect,
  [ActionTypes.CHANGE_TO_MULTIPLE_SELECT]: changeToMultipleSelect,
  [ActionTypes.CLOSE_AUDIOBAR]: closeAudioBar,
  [ActionTypes.SET_CURRENT_TOOL]: setCurrentTool,
  [ActionTypes.PLAY_MUSIC]: playMusic,
  [ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS]: setMultipleSelectedMusicIds,
  [ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID]: setSingleSelectedMusicId,
  [ActionTypes.CHANGE_TO_MULTIPLE_SELECT]: changeToMultipleSelect,
  [ActionTypes.CHANGE_TO_SINGLE_SELECT]: changeToSingleSelect,
  [ActionTypes.DELETE_MUSIC]: deleteMusic
});


export default ui;
