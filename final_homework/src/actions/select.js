import * as ActionTypes from '../contants/ActionTypes';


export const actionSetSingleSelectedMusicId = id => {
  return{
    type: ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID,
    id
  }
}

export const actionSetMultipleSelectedMusicIds = ids => {
  return{
    type: ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS,
    ids
  }
}