import * as ActionTypes from '../contants/ActionTypes';
import createReducer from './UTIL/createReducer';

const initState = {
  isMultipleSelect: false,
  play: false,
  rename: false,
  slice: false,
  share: false,
  delete: false,
  isToolPenaActive: false,
  modalMessage: '',
  currentTool: '',
}

const changeToSingleSelect = (state, action) => {
  return {
    ...state,
    isMultipleSelect: false,
  }
}
const changeToMultipleSelect = (state, action) => {
  return {
    ...state,
    isMultipleSelect: true,
    play: false,
    rename: false,
    slice: false,
    share: false,
    delete: true
  }
}

const closeAudioBar = (state, action) => {
  return {
    ...state,
    isToolPenaActive: false
  }
}
const setCurrentTool = (state, action) => {
  const { tool } = action;
  return {
    ...state,
    currentTool: tool,
    isToolPenaActive: true
  }
}
const playMusic = (state, action) => {
  return {
    ...state,
    isToolPenaActive: true
  }
}

const ui = createReducer(initState, {
  [ActionTypes.CHANGE_TO_SINGLE_SELECT]: changeToSingleSelect,
  [ActionTypes.CHANGE_TO_MULTIPLE_SELECT]: changeToMultipleSelect,
  [ActionTypes.CLOSE_AUDIOBAR]: closeAudioBar,
  [ActionTypes.SET_CURRENT_TOOL]: setCurrentTool,
  [ActionTypes.PLAY_MUSIC]: playMusic
})


export default ui;