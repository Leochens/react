import *  as ActionTypes from '../../contants/ActionTypes';

const crossReducer = (state, action) => {

  // console.log('全部的State', state);

  switch (action.type) {

    // 检测是否有推荐音乐 有的话 就不能显示删除
    case ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS: {
      const {
        musicManage: {
          currentMultipleSelectedMusicIds: cIds,
          recommendMusicIds: rIds
        }
      } = state;
      // 一个都没选 不能删除
      if (cIds.length === 0) {
        return {
          ...state,
          ui: {
            ...state.ui,
            delete: false
          }
        }
      }
      let flag = true;
      for (let i = 0; i < cIds.length; i++) {
        if (rIds.includes(cIds[i])) {
          flag = false;
          break;
        }
      }
      return {
        ...state,
        ui: {
          ...state.ui,
          delete: flag
        }
      }
    }

    case ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID: {
      const { id } = action;
      const {
        entities: {
          musics
        },
        musicManage:{ isMultipleSelect }
      } = state;

      const curMusic = musics[id];

      const newToolUiState = {
        play: isMultipleSelect ? false : true,
        rename: curMusic.plp || !curMusic.med ? false : true,
        slice: curMusic.med ? true : false,
        share: curMusic.med ? true : false,
        delete: curMusic.med ? true : false
      }

      return {
        ...state,
        ui: newToolUiState
      }
    }

    default: return state;
  }

}

export default crossReducer;