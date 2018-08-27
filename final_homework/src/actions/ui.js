import * as ActionTypes from '../contants/ActionTypes';

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
