import * as ActionTypes from '../contants/ActionTypes';
const ui = (state = {
  isMultipleSelect: false,
  play: false,
  rename: false,
  slice: false,
  share: false,
  delete: false,
  modalIsActive: false,
  isToolPenaActive: false,
  modalMessage: '',
  currentTool: '',
}, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TO_SINGLE_SELECT: {
      return {
        ...state,
        isMultipleSelect: false,
      }
    }
    case ActionTypes.PLAY_MUSIC: {
      return {
        ...state,
        isToolPenaActive: true
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
    case ActionTypes.SHOW_MODAL: {
      return {
        ...state,
        modalIsActive: true
      }
    }
    case ActionTypes.HIDE_MODAL: {
      return {
        ...state,
        modalIsActive: false,
        modalMessage:''
      }
    }
    case ActionTypes.CLOSE_AUDIOBAR: {
      return {
        ...state,
        isToolPenaActive: false
      }
    }
    case ActionTypes.SET_CURRENT_TOOL: {
      const { tool } = action;
      return {
        ...state,
        currentTool: tool,
        isToolPenaActive: true
      }
    }
    // case ActionTypes.SHOW_TOAST: {
    //   const { msg } = action;
    //   return {
    //     ...state,
    //     toastIsActive: true,
    //     toastMsg:msg
    //   }
    // }
    // case ActionTypes.HIDE_TOAST: {
    //   // const { msg } = action;
    //   return {
    //     ...state,
    //     toastIsActive: false,
    //     toastMsg:''
    //   }
    // }
    default: return state;
  }
};

export default ui;