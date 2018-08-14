import ActionTypes from '../const'

export const actionAddAuthorityMembers = (ids) => {
    return {
        type: ActionTypes.SELECT_ACTIONS.ADD_AUTHORITY_MEMBERS,
        ids
    }
}