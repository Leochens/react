import *  as ActionTypes from '../../contants/ActionTypes';
import audio from './audio';
const getToolPaneState = (musics, id) => {
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

  // console.log('全部的State', state);

  switch (action.type) {

    // 检测是否有推荐音乐 有的话 就不能显示删除
    case ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS: {
      const {
        musicManage: {
          currentMultipleSelectedMusicIds: cIds,
          recommendMusicIds: rIds,
        }
      } = state;
      const ui = { ...state.ui };
      // 一个都没选 不能删除
      if (cIds.length === 0) {
        ui.delete = false;
        return {
          ...state,
          ui
        }
      }
      ui.delete = true;
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
      const {
        entities: {
          musics
        }
      } = state;
      const newToolPaneState = getToolPaneState(musics, id);
      return {
        ...state,
        ui: {
          ...state.ui,
          ...newToolPaneState
        }
      }
    }

    case ActionTypes.PLAY_MUSIC: {
      return {
        ...state,
        audio: audio(state, action)
      }
    }
    // 音频事件是后执行的
    default: {
      console.log('default');
      const {
        musicManage: {
          currentSingleSelectedId: sId
        },
        entities: {
          musics
        }
      } = state;
      console.log(state);
      if(!musics[0]) {
        return state;
      }
      
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
  }


}

export default crossReducer;