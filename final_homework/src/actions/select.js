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



