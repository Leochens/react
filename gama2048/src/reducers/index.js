import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';
const main = (state = {
  currentScore: 0
}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SCORE: {
      return {
        currentScore: state.currentScore+action.increaseNum
      }
    }
    default: return state;
  }
};

export default combineReducers({
  main
});
