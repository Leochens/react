import * as ActionTypes from '../const/ActionTypes';


export const actionInitSquareMap = () => {
  return {
    type: ActionTypes.INIT_SQUARE_MAP
  }
}

export const actionMoveByDirections = (key) => {
  return {
    type: ActionTypes.MOVE_BY_DIRECTIONS,
    key
  }
}
export const actionClearNewPos = () => {
  return {
    type: ActionTypes.CLEAR_NEW_POS
  }
}