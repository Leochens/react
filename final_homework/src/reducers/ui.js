import * as ActionTypes from '../contants/ActionTypes';
const ui = (state = {
  isMultipleSelect: false,
  play: false,
  rename: false,
  slice: false,
  share: false,
  delete: false
}, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TO_SINGLE_SELECT: {
      return {
        ...state,
        isMultipleSelect: false,
      }
    }

    case ActionTypes.CHANGE_TO_MULTIPLE_SELECT: {
      return {
        ...state,
        isMultipleSelect: true,
        play: false,
        rename: false,
        slice: false,
        share: false,
        delete: true
      }
    }

    case ActionTypes.UPDATE_TOOL_STATE: {
      const { toolState } = action;
      if(state.isMultipleSelect) {
        return {
          ...state,
          play: false,
          rename: false,
          slice: false,
          share: false,
          delete: true
        }
      }
      return {
        ...state,
        ...toolState
      }
    }

    // 发现有不是我的音乐的 就不能删除 此时多选什么都不做

    default: return state;
  }
};

export default ui;