import * as ALL_ACTION_TYPES from '../const/ActionTypes'

export const actionSetTopMsg = () => {
    return {
        type: ALL_ACTION_TYPES.SET_TOP_MSG
    }
}
export const actionCancelSetTopMsg = () => {
    return {
        type: ALL_ACTION_TYPES.CANCEL_SET_TOP_MSG
    }
}
export const actionDeleteMsg = () => {
    return {
        type: ALL_ACTION_TYPES.DEL_MSG
    }
}
export const actionDeleteSelectMsg = () => {
    return {
        type: ALL_ACTION_TYPES.DEL_SELECT_MSG
    }
}
export const actionAddMsg = (item) => {
    return {
        type: ALL_ACTION_TYPES.ADD_MSG, 
        item
    }
}

export const actionToggleItemPanel = () => {
    return {
        type: ALL_ACTION_TYPES.TOGGLE_ITEM_PANEL
    }
}
export const actionToggleAddPanel = () => {
    return {
        type: ALL_ACTION_TYPES.TOGGLE_ADD_PANEL
    }
}

export const actionToggleMultiDelButton = () => {
    return {
        type: ALL_ACTION_TYPES.TOGGLE_MULTI_DEL_BUTTON
    }
}
export const actionSetCurrentItem = (currentItem) => {
    return {
        type: ALL_ACTION_TYPES.SET_CURRENT_ITEM, 
        currentItem
    }
}

export const actionAddToDeleteQueue = (id) => {
    return {
        type: ALL_ACTION_TYPES.ADD_TO_DELETE_QUEUE,
        id
    }
}
export const actionDelFromDeleteQueue = (id) => {
    return {
        type: ALL_ACTION_TYPES.DEL_FROM_DELETE_QUEUE,
        id
    }
}
