import * as ActionTypes from '../contants/ActionTypes';

export const actionShowModal = () => {
  return {
    type: ActionTypes.SHOW_MODAL,
  }
}
export const actionHideModal = () => {
  return {
    type: ActionTypes.HIDE_MODAL,
  }
}