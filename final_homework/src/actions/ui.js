import * as ActionTypes from '../contants/ActionTypes';

export const actionUpdateToolState = toolState => {
  return {
    type: ActionTypes.UPDATE_TOOL_STATE,
    toolState
  }
}