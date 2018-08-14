import ActionTypes from '../const'

export const actionToggleExcellent = (id) => {
    return {
        type: ActionTypes.SWITCH_ACTIONS.TOGGLE_EXCELLENT,
        id
    }
}



export const actionSelectDepartment = (id) => {
    return {
        type: ActionTypes.SWITCH_ACTIONS.SELECT_DEPARTMENT,
        id
    }
}