import * as ActionTypes from '../contants/ActionTypes';

export const actionShowModal = () => {
  return {
    type: ActionTypes.SHOW_MODAL,
  }
}
export const actionHideModal = () => {
  return {
    type: ActionTypes.HIDE_MODAL,
  }
}

export const actionCloseAudioBar = () => {
  return {
    type: ActionTypes.CLOSE_AUDIOBAR
  }
}

export const actionSetCurrentTool = tool => {
  return {
    type: ActionTypes.SET_CURRENT_TOOL,
    tool
  }
}
