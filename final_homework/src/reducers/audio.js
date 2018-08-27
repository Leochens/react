import * as ActionTypes from '../contants/ActionTypes';
// 同步操作
const audio = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID: {
      const { music } = action;
      return music;
    }
    case ActionTypes.CLEAR_SLICE_MUSIC: {
      return {
        ...state,
        emt: 0,
        bmt: 0
      }
    }
    case ActionTypes.SLICE_MUSIC: {
      const { startPos, endPos } = action;
      return {
        ...state,
        bmt: startPos,
        emt: endPos
      }
    }
    default: return state;
  }
}

export default audio;
