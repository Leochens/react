import * as ActionTypes from '../contants/ActionTypes';


export const actionSetSingleSelectedMusicId = music => {
  return{
    type: ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID,
    music
  }
}

export const actionSetMultipleSelectedMusicIds = music => {
  return{
    type: ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS,
    music
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



