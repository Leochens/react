import * as ActionTypes from '../const/ActionTypes';

export const actionUpdateScore = (increaseNum) => {
  return {
    type: ActionTypes.UPDATE_SCORE,
    increaseNum
  }
}
export const actionMergeSquare = () => {
  return {
    type: ActionTypes.MERGE_SQUARE
  }
}
export const actionInitSquareMap = () => {
  return {
    type: ActionTypes.INIT_SQUARE_MAP
  }
}
export const actionAddNewSquare = () => {
  return {
    type: ActionTypes.ADD_NEW_SQUARE
  }
}

export const actionPressKayBoardByDirections = (key) => {
  return {
    type: ActionTypes.PRESS_KEYBOARD_BY_DIRECTIONS,
    key
  }
}