import * as ActionTypes from '../const/ActionTypes';

export const actionInitSquareMap = () => {
  return {
    type: ActionTypes.INIT_SQUARE_MAP
  };
};

export const actionMoveByDirections = key => {
  return {
    type: ActionTypes.MOVE_BY_DIRECTIONS,
    key
  };
};

export const actionIncreaseLevel = () => {
  return {
    type: ActionTypes.INCREASE_LEVEL
  };
};

export const actionResetLevel = () => {
  return {
    type: ActionTypes.RESET_LEVEL
  };
};

export const actionDestroySquare = () => {
  return {
    type: ActionTypes.DESTROY_SQUARE
  };
};
