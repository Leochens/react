import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';
import tools from '../tools';

//判断是否死亡

const mapIsFull = ({ col, row }) => {
  if (col === -1 && row === -1) {
    return 1;
  }
  return 0;
}
const Game = (state = {
  squareMap: tools.clearSquare(),
  currentScore: 0,
  increaseNum: 0,
  changedSquares: [],
  newPos: {
    row: -1,
    col: -1
  }
}, action) => {

  switch (action.type) {
    case ActionTypes.INIT_SQUARE_MAP: {
      // 取得随机数
      let pos = {};
      const newMap = tools.clearSquare();
      pos = tools.getNextPos(newMap);
      newMap[pos.row][pos.col] = tools.getRandomNumber();
      pos = tools.getNextPos(newMap);
      newMap[pos.row][pos.col] = tools.getRandomNumber();
      return {
        ...state,
        squareMap: newMap,
        currentScore: 0,
        increaseNum: 0
      }
    }
    case ActionTypes.MOVE_BY_DIRECTIONS: {
      const { key } = action;
      const oldMap = state.squareMap.slice();
      const newPos = {
        row: -1,
        col: -1
      }
      const {
        newMap,
        increaseNum,
        willGenerateNew,
        changedSquares
      } = tools.moveByDirections(key, oldMap)

      const { row, col } = tools.getNextPos(newMap);
      if (mapIsFull({ row, col })) {
        if (tools.judgeDie(newMap)) {
          alert('你输了');
          return state;
        } else {

          return state;
        }
      }
      if (willGenerateNew) {
        newMap[row][col] = tools.getRandomNumber();
        newPos.row = row;
        newPos.col = col;
      }

      console.log('新位置', newPos);
      return {
        ...state,
        squareMap: newMap,
        increaseNum,
        currentScore: state.currentScore + increaseNum,
        changedSquares,
        newPos: {
          row,
          col
        }
      }
    }



    case ActionTypes.CLEAR_NEW_POS: {
      return {
        ...state,
        newPos: {
          row: -1,
          col: -1
        }
      }
    }
    default: return state;
  }
}
export default combineReducers({
  Game
});
