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