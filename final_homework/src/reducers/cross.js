import *  as ActionTypes from '../contants/ActionTypes';
const getToolPaneState = (musics, id) => {
  const curMusic = musics[id];
  if (!musics[id]) return {
    play: false,
    rename: false,
    slice: false,
    share: false,
    delete: false
  }
  return {
    play: true,
    rename: curMusic.plp || !curMusic.med ? false : true,
    slice: curMusic.med ? true : false,
    share: curMusic.med ? true : false,
    delete: curMusic.med ? true : false
  }
};

const crossReducer = (state, action) => {
  const {
    musicManage: {
      recommendMusicIds: rIds,
    },
    ui: {
      currentMultipleSelectedMusicIds: mIds,
      currentSingleSelectedId: sId
    },
    entities: {
      musics
    }
  } = state;
  switch (action.type) {
    case ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS: {
      const ui = { ...state.ui };
      // 一个都没选 不能删除 或者是 当前没有单选选中的 也不能删除
      ui.delete = mIds.length ? true : false;
      // 检测是否有推荐音乐 有的话 就不能显示删除
      for (let i = 0; i < mIds.length; i++) {
        if (rIds.includes(mIds[i])) {
          ui.delete = false;
          break;
        }
      }
      return {
        ...state,
        ui
      }
    }
    case ActionTypes.CHANGE_TO_SINGLE_SELECT: {
      return {
        ...state,
        ui: {
          ...state.ui,
          ...(getToolPaneState(musics, sId))
        }
      }
    }
    case ActionTypes.CHANGE_TO_MULTIPLE_SELECT: {

      const flag = rIds.includes(sId);
      console.log();
      return {
        ...state,
        ui: {
          ...state.ui,
          delete: flag ? false : true
        }
      }
    }
    default: return state;
  }
}

export default crossReducer;