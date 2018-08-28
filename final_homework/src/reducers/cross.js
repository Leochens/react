import * as ActionTypes from '../contants/ActionTypes';
import Immutable from 'immutable';

const getToolPaneState = (musics, id) => {
  const _curMusic = musics.get(`${id}`);
  
  if (!_curMusic) {
    return {
      play: false,
      rename: false,
      slice: false,
      share: false,
      delete: false
    };
  }
  const curMusic = musics.get(`${id}`).toJS();

  return Immutable.fromJS({
    play: true,
    rename: !(curMusic.plp || !curMusic.med),
    slice: !!curMusic.med,
    share: !!curMusic.med,
    delete: !!curMusic.med
  });
};

const crossReducer = (state, action) => {
  const rIds = state.getIn(['musicManage', 'recommendMusicIds']);
  const mIds = state.getIn(['ui', 'currentMultipleSelectedMusicIds']);
  const sId = state.getIn(['ui', 'currentSingleSelectedId']);
  const musics = state.getIn(['entities', 'musics']);

  switch (action.type) {
    case ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS: {
      // 一个都没选 不能删除 或者是 当前没有单选选中的 也不能删除
      // 检测是否有推荐音乐 有的话 就不能显示删除
      for (let i = 0; i < mIds.size; i++) {
        if (rIds.toJS().includes(mIds.get(i))) {
          return state.setIn(['ui', 'toolState', 'delete'], false)
        }
      }
      return state.setIn(['ui', 'toolState', 'delete'], !!mIds.size)
    }

    // 切换到单选
    case ActionTypes.CHANGE_TO_SINGLE_SELECT: {
      return state.setIn(['ui', 'toolState'], getToolPaneState(musics, sId));
    }

    // 切换到多选
    case ActionTypes.CHANGE_TO_MULTIPLE_SELECT: {
      if (rIds.toJS().includes(sId)) {
        return state.setIn(['ui', 'toolState', 'delete'], false)
      }
      return state;
    }

    default: return state;
  }
};

export default crossReducer;
