import * as ActionTypes from '../contants/ActionTypes';
const ui = (state = {
  isMultipleSelect: false,
  play: false,
  rename: false,
  slice: false,
  share: false,
  delete: false,
  modalIsActive: true,
  modalMessage: ''
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
    default: return state;
  }
};

export default ui;