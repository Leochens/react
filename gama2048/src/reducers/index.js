import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';
import tools from '../tools';
import reward from './reward';


// 判满
const mapIsFull = ({ col, row }) => {
  if (col === -1 && row === -1) {
    return 1;
  }
  return 0;
};
const Game = (state = {
  squareMap: tools.clearSquare(),
  currentScore: 0,
  increaseNum: 0,
  changedSquares: [],
  maxScore: 0,
  isDie: false,
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
        increaseNum: 0,
        isDie: false,
        newPos: {
          row: -1,
          col: -1
        }
      };
    }
    case ActionTypes.MOVE_BY_DIRECTIONS: {
      const { key } = action;
      const oldMap = state.squareMap.slice();
      const newPos = {
        row: -1,
        col: -1
      };
      const {
        newMap,
        increaseNum,
        willGenerateNew,
        changedSquares
      } = tools.moveByDirections(key, oldMap);

      const { row, col } = tools.getNextPos(newMap);
      if (mapIsFull({ row, col })) {
        if (tools.judgeDie(newMap)) {
          return {
            ...state,
            maxScore: state.maxScore < state.currentScore
              ? state.currentScore
              : state.maxScore,
            isDie: true
          };
        }
        return state;
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
        },
        isDie: false
      };
    }
    case ActionTypes.CLEAR_NEW_POS: {
      return {
        ...state,
        newPos: {
          row: -1,
          col: -1
        },
        isDie: false
      };
    }

    // 随机销毁0~3个方块
    case ActionTypes.DESTROY_SQUARE: {
      const newMap = state.squareMap.slice();
      [1, 2, 3].forEach(() => {
        const { row, col } = tools.getNextPos();
        newMap[row][col] = 0;
      });

      return {
        ...state,
        squareMap: newMap,
        isDie: false
      };
    }

    default: return state;
  }
};
export default combineReducers({
  Game,
  reward
});
