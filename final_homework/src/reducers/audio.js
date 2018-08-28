import * as ActionTypes from '../contants/ActionTypes';
import Toast from '../components/Toast/Toast';
import Immutable from 'immutable';
const initState = Immutable.fromJS({});

// 同步操作
const audio = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID: {
      const { music } = action;
      return Immutable.fromJS(music);
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
      return state.set('name', newName);
    }

    case ActionTypes.CLEAR_SLICE_MUSIC: {
      return state
        .set('emt', 0)
        .set('bmt', 0);
    }

    case ActionTypes.SLICE_MUSIC: {
      const { startPos, endPos } = action;
      return state
        .set('emt', endPos)
        .set('bmt', startPos);
    }
    default: return state;
  }
}

export default audio;
