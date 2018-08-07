import ActionTypes from '../const'

export const actionToggleExcellent = (id) => {
    return {
        type: ActionTypes.SWITCH_ACTIONS.TOGGLE_EXCELLENT,
        id
    }
}