import * as ActionTypes from '../const/ActionTypes';


const reward = (state = {
  level: 1,
  bombCount: 0
}, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_LEVEL: {
      return {
        ...state,
        level: state.level + 1,
        bombCount: state.bombCount + 1
      };
    }
    case ActionTypes.RESET_LEVEL: {
      return {
        ...state,
        level: 1,
        bombCount: 0
      };
    }
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
