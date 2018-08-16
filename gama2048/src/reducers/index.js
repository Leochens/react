import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';
import {
  getNextPos,
  getRandomNumber,
  clearedSquare,
  handlePressKeyboard
} from '../tools';

//判断是否死亡
const amILose = (gameMap) => {
  const len = gameMap.length;
  // 横向
  let isAnotherWayHere = 1;
  for (let r = 0; r < len; r++) {
    for (let c = 0; c < len; c++) {
      //四个角不用检查
      if (r === 0 && c === 0 ||
        r === 0 && c === len - 1 ||
        r === len - 1 && c === 0 ||
        r === len - 1 && c === len - 1) {
        continue;
      }
      const cur = gameMap[r][c];
      if (r === 0) {
        const left = gameMap[r][c - 1];
        const right = gameMap[r][c + 1];
        const down = gameMap[r + 1][c];

        if (cur === left || cur === right || cur === down) {
          isAnotherWayHere = 0;
          break;
        }
      } else if (r === len - 1) {
        const left = gameMap[r][c - 1];
        const right = gameMap[r][c + 1];
        const up = gameMap[r - 1][c];
        if (cur === left || cur === right || cur === up) {
          isAnotherWayHere = 0;
          break;
        }
      } else if (c === 0) {
        const right = gameMap[r][c + 1];
        const up = gameMap[r - 1][c];
        const down = gameMap[r + 1][c];
        if (cur === up || cur === right || cur === down) {
          isAnotherWayHere = 0;
          break;
        }
      } else if (c === len - 1) {
        const left = gameMap[r][c - 1];
        const up = gameMap[r - 1][c];
        const down = gameMap[r + 1][c];
        if (cur === up || cur === left || cur === down) {
          isAnotherWayHere = 0;
          break;
        }
      } else {
      };
    }
  }

  // 纵向
  return isAnotherWayHere;
}
const mapIsFull = ({ col, row }) => {
  if (col === -1 && row === -1) {
    return 1;
  }
  return 0;
}
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
      if (mapIsFull({ row, col })) {
        if (amILose(newMap)) {
          alert('你输了');
          return state;
        } else {

          return state;
        }
      }
      if (willGenerateNew) {
        newMap[row][col] = getRandomNumber();
        newPos.row = row;
        newPos.col = col;
      }

      console.log('新位置', newPos);
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
