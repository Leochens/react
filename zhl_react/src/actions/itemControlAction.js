import { SET_TOP_MSG, CANCEL_SET_TOP_MSG, DEL_MSG, DEL_SELECT_MSG, ADD_MSG, TOGGLE_ADD_PANEL, TOGGLE_ITEM_PANEL, SET_CURRENT_ITEM } from '../const/ActionTypes'

export const actionSetTopMsg = () => {
    return {
        type: SET_TOP_MSG
    }
}
export const actionCancelSetTopMsg = () => {
    return {
        type: CANCEL_SET_TOP_MSG
    }
}
export const actionDeleteMsg = () => {
    return {
        type: DEL_MSG
    }
}
export const actionDeleteSelectMsg = (ids) => {
    return {
        type: DEL_SELECT_MSG
    }
}
export const actionAddMsg = (item) => {
    return {
        type: ADD_MSG, item
    }
}

export const actionToggleItemPanel = () => {
    return {
        type: TOGGLE_ITEM_PANEL
    }
}
export const actionToggleAddPanel = () => {
    return {
        type: TOGGLE_ADD_PANEL
    }
}

export const actionSetCurrentItem = (currentItem) => {
    return {
        type: SET_CURRENT_ITEM, currentItem
    }
}

