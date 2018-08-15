import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';
import { getNextPos, getRandomNumber} from '../tools';
const score = (state = {
  currentScore: 0
}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SCORE: {
      return {
        currentScore: state.currentScore + action.increaseNum
      }
    }
    default: return state;
  }
};


const clearedSquare = () => [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
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
      if (row === -1 && col === -1) {
        alert('你输了,重新来吧');
        return state;
      }
      const randomNum = getRandomNumber();
      const newMap = state.slice();
      newMap[row][col] = randomNum;
      return newMap;
    }
    default: return state;
  }
}
export default combineReducers({
  score,
  squareMap
});
