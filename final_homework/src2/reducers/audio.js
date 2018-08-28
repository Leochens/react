import * as ActionTypes from '../contants/ActionTypes';
import Toast from '../components/Toast/Toast';

// 同步操作
const audio = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID: {
      const { music } = action;
      return music;
    }
    case ActionTypes.RENAME_MUSIC: {
      let newName = action.newName;
      if (newName === '') {
        Toast.info('音乐名不能为空!');
        return state;
      }
      if (newName.indexOf('.mp3') === -1) {
        newName += '.mp3';
      }
      return {
        ...state,
        name: newName
      }
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
