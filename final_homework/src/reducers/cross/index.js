import *  as ActionTypes from '../../contants/ActionTypes';
import audio from '../audio';
const getToolPaneState = (musics, id) => {
  if (!musics || !id || !musics[id]) {  // 不传参数说明当前都没有选中
    return {
      play: false,
      rename: false,
      slice: false,
      share: false,
      delete: false
    }
  }
  const curMusic = musics[id];
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
      currentMultipleSelectedMusicIds: cIds,
      recommendMusicIds: rIds,
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
      if (cIds.length === 0) {
        ui.delete = false;
        return {
          ...state,
          ui
        }
      }
      ui.delete = true;
    // 检测是否有推荐音乐 有的话 就不能显示删除
      for (let i = 0; i < cIds.length; i++) {
        if (rIds.includes(cIds[i])) {
          ui.delete = false;
          break;
        }
      }
      return {
        ...state,
        ui
      }
    }

    case ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID: {
      const { id } = action;
      const newToolPaneState = getToolPaneState(musics, id);
      return {
        ...state,
        ui: {
          ...state.ui,
          ...newToolPaneState
        }
      }
    }
    case ActionTypes.DELETE_MUSIC: {

      if (!sId) {
        return {
          ...state,
          ui: getToolPaneState()
        }
      }
      return state;

    }
    case ActionTypes.SET_CURRENT_TOOL:
    case ActionTypes.CLEAR_SLICE_MUSIC:
      {
        return {
          ...state,
          audio: audio(state, action)
        }
      }
    case `${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`:
      // case `${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`:
      {
        if (sId) {
          const newToolPaneState = getToolPaneState(musics, sId);
          return {
            ...state,
            audio: audio(state, action),
            ui: {
              ...state.ui,
              ...newToolPaneState
            }
          }
        }
        return {
          ...state,
          audio: audio(state, action)
        }
      }
    case ActionTypes.CHANGE_TO_SINGLE_SELECT: {
      return {
        ...state,
        ui: getToolPaneState(musics, sId)
      }
    }
    case ActionTypes.CHANGE_TO_MULTIPLE_SELECT: {
      if (!sId) {
        return {
          ...state,
          ui: {
            ...state.ui,
            delete: false
          }
        }
      }
      return state;
    }

    default:return state;
  }
}

export default crossReducer;