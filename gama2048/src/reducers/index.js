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
  squareMap: tools.clearSquare(), // 游戏地图
  currentScore: 0, // 当前分数
  increaseNum: 0, // 增加的分数
  changedSquares: [], // 发生改变的方块
  maxScore: 0, // 历史最高分
  isDie: false, // 是否死亡
  newPos: { // 新出现的方块的坐标
    row: -1,
    col: -1
  }
}, action) => {
  switch (action.type) {
    // 初始化游戏地图
    case ActionTypes.INIT_SQUARE_MAP: {
      // 连续2次获得取得随机数并置入地图
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
    // 根据方向来执行不同的操作
    case ActionTypes.MOVE_BY_DIRECTIONS: {
      const { key } = action;
      const oldMap = state.squareMap.slice();
      const newPos = {
        row: -1,
        col: -1
      };

      // 从移动方块函数中可以得到移动后的地图，增加的分数
      // 位置发生改变的方块，以及是否需要生出新方块的标志
      const {
        newMap,
        increaseNum,
        willGenerateNew,
        changedSquares
      } = tools.moveByDirections(key, oldMap);

      // 获得新方块的坐标
      const { row, col } = tools.getNextPos(newMap);

      // 根据判断row和col的值来判断是否真的生成了新方块的有效坐标
      // 判断地图是否已满 满了之后还有没有继续融合方块的条件 从而判断是否死亡
      if (mapIsFull({ row, col })) {
        // 如果确实game over 那么要和当前的历史最高分做比较 取高者替代
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
      // 如果允许生长新的方块 那么就在新地图响应位置生出
      if (willGenerateNew) {
        newMap[row][col] = tools.getRandomNumber();
        newPos.row = row;
        newPos.col = col;
      }

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

    // 炸弹道具的效果 随机销毁0~3个方块
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
