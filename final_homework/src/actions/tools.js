import * as ActionTypes from '../contants/ActionTypes';

export const actionRenameMusic = () => {
  return {
    type: ActionTypes.RENAME_MUSIC
  }
}

export const actiondeleteMusic = (isMultipleSelect) => {
  return {
    type: ActionTypes.DELETE_MUSIC,
    isMultipleSelect
  }
}

export const actionPlayMusic = () => {
  return {
    type: ActionTypes.PLAY_MUSIC
  }
}

export const actionShareMusic = () => {
  return {
    type: ActionTypes.SHARE_MUSIC
  }
}

export const actionSliceMusic = () => {
  return {
    type: ActionTypes.SLICE_MUSIC
  }
}
