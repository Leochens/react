import * as ActionTypes from '../contants/ActionTypes';

const musicManage = (state = {
  myMusicIds: [],
  recommendMusicIds: [],
  currentMultipleSelectedMusicIds: [],
  currentSingleSelectedId: 133482000,
}, action) => {
  switch (action.type) {
    case `${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`: {
      // console.log('拉取我的音乐ids成功', action.response.result);
      const { result: myMusicIds } = action.response;
      return {
        ...state,
        myMusicIds
      };
    }

    case `${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`: {
      // console.log('拉取推荐音乐ids成功', action.response.result);
      const { result: recommendMusicIds } = action.response;
      return {
        ...state,
        recommendMusicIds
      };
    }

    case ActionTypes.SET_SINGLE_SELECTED_MUSIC_ID: {
      const { id } = action;
      return {
        ...state,
        currentSingleSelectedId: id
      }
    }

    case ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS: {
      const { id } = action;
      const currentMultipleSelectedMusicIds = state.currentMultipleSelectedMusicIds.slice();

      // 如果有就剔除 没有就添加
      if (currentMultipleSelectedMusicIds.includes(id)) {
        const index = currentMultipleSelectedMusicIds.indexOf(id);
        currentMultipleSelectedMusicIds.splice(index, 1);
      } else {
        if (currentMultipleSelectedMusicIds.length === 5) {
          // 最多选择5首
          // TODO: 此时应该提示用户
          return state;
        }
        currentMultipleSelectedMusicIds.push(id);
      }

      return {
        ...state,
        currentMultipleSelectedMusicIds
      }
    }

    case ActionTypes.CHANGE_TO_SINGLE_SELECT: {
      return {
        ...state,
        currentMultipleSelectedMusicIds: []
      }
    }

    case ActionTypes.CHANGE_TO_MULTIPLE_SELECT: {

      // TODO: 触发多选时要记得把单选时选中的那个加入到多选列表里
      // COMPLETED
      return {
        ...state,
        currentMultipleSelectedMusicIds: [
          state.currentSingleSelectedId
        ]
      }
    }
    case ActionTypes.PLAY_MUSIC: {
      return state;
    }
    case ActionTypes.DELETE_MUSIC: {
      return state;
    }
    case ActionTypes.SHARE_MUSIC: {
      return state;
    }
    case ActionTypes.SLICE_MUSIC: {
      return state;
    }
    case ActionTypes.RENAME_MUSIC: {
      return state;
    }

    default: return state;
  }
};

export default musicManage;
