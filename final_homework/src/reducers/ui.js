import * as ActionTypes from '../contants/ActionTypes';
const ui = (state = {
  isMultipleSelect: false,
  play: true,
  rename: false,
  slice: false,
  share: false,
  delete: false,
  modalIsActive: false,
  isAudioBarActive: false,
  modalMessage: ''
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
        isAudioBarActive: true
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
        isAudioBarActive: false
      }
    }
    default: return state;
  }
};

export default ui;