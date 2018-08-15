import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';
import {
  getNextPos,
  getRandomNumber,
  clearedSquare,
  handlePressKeyboard,
} from '../tools';


const Game = (state = {
   squareMap: clearedSquare(),
   currentScore: 0,
   increaseNum: 0 
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
        squareMap: newMap
      }
    }
    // case ActionTypes.ADD_NEW_SQUARE: {
    //   const { row, col } = getNextPos(state);
    //   console.log('坐标', row, col);
    //   if(isGameOver({ row, col })){
    //     return state;
    //   }  
    //   const randomNum = getRandomNumber();
    //   const newMap = state.slice();
    //   newMap[row][col] = randomNum;
    //   return {
    //     ...state,
    //     squareMap: newMap
    //   }
    // }
    case ActionTypes.PRESS_KEYBOARD_BY_DIRECTIONS: {
      const { key } = action;
      const oldMap = state.squareMap.slice();
      const { newMap, increaseNum } = handlePressKeyboard(key,oldMap)
      return {
        ...state,
        squareMap:newMap,
        increaseNum,
        currentScore: state.currentScore + increaseNum
      }
    }
    default: return state;
  }
}
export default combineReducers({
  Game
});
