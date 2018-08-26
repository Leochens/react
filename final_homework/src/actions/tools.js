import * as ActionTypes from '../contants/ActionTypes';

export const actionRenameMusic = (id, newName) => {
  return {
    type: ActionTypes.RENAME_MUSIC,
    id,
    newName
  }
}

export const actiondeleteMusic = (isMultipleSelect) => {
  return {
    type: ActionTypes.DELETE_MUSIC,
    isMultipleSelect
  }
}


export const actionShareMusic = () => {
  return {
    type: ActionTypes.SHARE_MUSIC
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
export const actionClearSliceMusic = id => {
  return {
    type: ActionTypes.CLEAR_SLICE_MUSIC,
    id
  }
}


