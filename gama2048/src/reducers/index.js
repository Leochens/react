import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';
import {
  getNextPos,
  getRandomNumber,
  clearedSquare,
  handlePressKeyboard,
  isGameOver
} from '../tools';

const score = (state = { currentScore: 0 }, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SCORE: {
      return {
        currentScore: state.currentScore + action.increaseNum
      }
    }
    default: return state;
  }
}

const squareMap = (state = clearedSquare(), action) => {
  switch (action.type) {
    case ActionTypes.INIT_SQUARE_MAP: {
      // 取得随机数
      let pos = {};
      const newMap = clearedSquare();
      pos = getNextPos(newMap);
      newMap[pos.row][pos.col] = getRandomNumber();
      pos = getNextPos(newMap);
      newMap[pos.row][pos.col] = getRandomNumber();
      return newMap;
    }
    case ActionTypes.ADD_NEW_SQUARE: {
      const { row, col } = getNextPos(state);
      console.log('坐标', row, col);
      if(isGameOver({ row, col })){
        return state;
      }  
      const randomNum = getRandomNumber();
      const newMap = state.slice();
      newMap[row][col] = randomNum;
      return newMap;
    }
    case ActionTypes.PRESS_KEYBOARD_BY_DIRECTIONS: {
      const { key } = action;
      const oldMap = state.slice();
      const newMap = handlePressKeyboard(key,oldMap)
      return newMap;
    }
    default: return state;
  }
}
export default combineReducers({
  score,
  squareMap
});
