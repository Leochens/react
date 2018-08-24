import * as ActionTypes from '../contants/ActionTypes';


export const actionSetSingleSelectedMusicId = id => {
  return{
    type: ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID,
    id
  }
}

export const actionSetMultipleSelectedMusicIds = id => {
  return{
    type: ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS,
    id
  }
}

export const actionChangeToMultipleSelect = () => {
  return {
    type: ActionTypes.CHANGE_TO_MULTIPLE_SELECT
  }
}

export const actionChangeToSingleSelect = () => {
  return {
    type: ActionTypes.CHANGE_TO_SINGLE_SELECT
  }
}

export const actionClearSliceMusic = id => {
  return {
    type: ActionTypes.CLEAR_SLICE_MUSIC,
    id
  }
}

export const actionSliceMusicStartPos = (id,startPos) => {
  return {
    type: ActionTypes.SLICE_MUSIC_START_POS,
    startPos,
    id
  }
}

export const actionSliceMusicEndPos = (id,endPos) => {
  return {
    type: ActionTypes.SLICE_MUSIC_END_POS,
    endPos,
    id
  }
}

export const actionSliceMusic = (id, startPos, endPos) => {
  return {
    type: ActionTypes.SLICE_MUSIC,
    startPos,
    endPos,
    id
  }
}