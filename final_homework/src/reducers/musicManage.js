import * as ActionTypes from '../contants/ActionTypes';

const musicManage = (state = {
  myMusicIds: [],
  recommendMusicIds: [],
  currentMultipleSelectedMusicIds: [],
  currentSingleSelectedId: 133482000,
  isMultipleSelect: false
}, action) => {
  switch (action.type) {
    case `${ActionTypes.FETCH_MY_MUSIC_LIST}_SUC`: {
      console.log('拉取我的音乐ids成功', action.response.result);
      const { result: myMusicIds } = action.response;
      return {
        ...state,
        myMusicIds
      };
    }
    case `${ActionTypes.FETCH_RECOMMEND_MUSIC_LIST}_SUC`: {
      console.log('拉取推荐音乐ids成功', action.response.result);
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

    case ActionTypes.CHANGE_TO_SINGLE_SELECT: {
      return {
        ...state,
        isMultipleSelect: false
      }
    }

    case ActionTypes.CHANGE_TO_MULTIPLE_SELECT: {
      return {
        ...state,
        isMultipleSelect: true
      }
    }

    default: return state;
  }
};

export default musicManage;
