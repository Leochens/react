import ActionTypes from '../const'

export const actionAddAuthorityMembers = (ids) => {
    return {
        type: ActionTypes.SELECT_ACTIONS.ADD_AUTHORITY_MEMBERS,
        ids
    }
}
export const actionDelAuthorityMembers = (ids) => {
    return {
        type: ActionTypes.SELECT_ACTIONS.DEL_AUTHORITY_MEMBERS,
        ids
    }
}