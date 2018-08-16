import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';
import {
  getNextPos,
  getRandomNumber,
  clearedSquare,
  handlePressKeyboard,
  isGameOver
} from '../tools';


const Game = (state = {
  squareMap: clearedSquare(),
  currentScore: 0,
  increaseNum: 0,
  newPos: {
    row: -1,
    col: -1
  }
}, action) => {
  switch (action.type) {
    case ActionTypes.INIT_SQUARE_MAP: {
      // 取得随机数
      let pos = {};
      const newMap = clearedSquare();
      pos = getNextPos(newMap);
      newMap[pos.row][pos.col] = getRandomNumber();
      pos = getNextPos(newMap);
      newMap[pos.row][pos.col] = getRandomNumber();
      return {
        ...state,
        squareMap: newMap,
        currentScore: 0,
        increaseNum: 0
      }
    }
    case ActionTypes.PRESS_KEYBOARD_BY_DIRECTIONS: {
      const { key } = action;
      const oldMap = state.squareMap.slice();
      const newPos = {
        row: -1,
        col: -1
      }
      const {
        newMap,
        increaseNum,
        willGenerateNew
      } = handlePressKeyboard(key, oldMap)

      const { row, col } = getNextPos(newMap);
      if (isGameOver({ row, col })) {
        return state;
      }
      if (willGenerateNew) {
        newMap[row][col] = getRandomNumber();
        newPos.row = row;
        newPos.col = col;
      }

      console.log('新位置',newPos);
      return {
        ...state,
        squareMap: newMap,
        increaseNum,
        currentScore: state.currentScore + increaseNum,
        newPos: {
          row,
          col
        }
      }
    }
    default: return state;
  }
}
export default combineReducers({
  Game
});
