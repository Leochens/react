import * as ActionTypes from '../const/ActionTypes';

const reward = (state = {
  level: 1,
  bombCount: 0
}, action) => {
  switch (action.type) {
    // 升级 并 炸弹数加一
    case ActionTypes.INCREASE_LEVEL: {
      return {
        ...state,
        level: state.level + 1,
        bombCount: state.bombCount + 1
      };
    }
    // 用户点击重新开始后 等级和炸弹数都清零
    case ActionTypes.RESET_LEVEL: {
      return {
        ...state,
        level: 1,
        bombCount: 0
      };
    }
    // 炸弹使用后数量要减一
    case ActionTypes.DESTROY_SQUARE: {
      return {
        ...state,
        bombCount: state.bombCount - 1
      };
    }
    default: return state;
  }
};

export default reward;
