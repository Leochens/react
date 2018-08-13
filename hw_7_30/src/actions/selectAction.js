import ActionTypes from '../const'

export const actionSelectAuthorityUser = (id) => {
    return {
        type: ActionTypes.SELECT_ACTIONS.SELECT_AUTHORITY_USER,
        id
    }
}