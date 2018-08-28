import * as ActionTypes from '../const/ActionTypes';
import tools from '../tools';
// 判满
const game = (state = {
  squareMap: tools.clearSquare(), // 游戏地图
  currentScore: 0, // 当前分数
  increaseNum: 0, // 增加的分数
  changedSquares: [], // 发生改变的方块
  maxScore: 0, // 历史最高分
  isDie: false, // 是否死亡
  newPos: { row: -1, col: -1 } // 新出现的方块的坐标
}, action) => {
  switch (action.type) {
    case ActionTypes.INIT_SQUARE_MAP: { // 初始化游戏地图
      const newMap = tools.clearSquare();
      [1, 2].forEach(() => { // 连续2次获得取得随机数并置入地图
        const pos = tools.getNextPos(newMap);
        newMap[pos.row][pos.col] = tools.getRandomNumber();
      });
      return {
        ...state,
        squareMap: newMap,
        currentScore: 0,
        increaseNum: 0,
        isDie: false,
        newPos: { row: -1, col: -1 }
      };
    }

    case ActionTypes.MOVE_BY_DIRECTIONS: { // 根据方向来执行不同的操作
      const { key } = action;
      const oldMap = state.squareMap.slice();

      const moveResult = tools.moveByDirections(key, oldMap);// 从移动方块函数中可以得到移动后的地图，增加的分数位置发生改变的方块，以及是否需要生出新方块的标志
      const {
        newMap, increaseNum, willGenerateNew, changedSquares
      } = moveResult;
      const { row, col } = tools.getNextPos(newMap);// 获得新方块的坐标

      if (tools.mapIsFull({ row, col })) { // 判断地图是否已满 满了之后还有没有继续融合方块的条件 从而判断是否死亡
        if (tools.judgeDie(newMap)) { // 如果确实game over 那么要和当前的历史最高分做比较 取高者替代
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

      if (willGenerateNew) { // 如果允许生长新的方块 那么就在新地图响应位置生出
        newMap[row][col] = tools.getRandomNumber();
      }

      return {
        ...state,
        squareMap: newMap,
        increaseNum,
        currentScore: state.currentScore + increaseNum,
        changedSquares,
        newPos: { row, col },
        isDie: false
      };
    }

    case ActionTypes.DESTROY_SQUARE: { // 炸弹道具的效果 随机销毁0~3个方块
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
export default game;
