import ACTION_TYPES from '../const'
export const actionToggleReply = (id) => {
    return {
        type: ACTION_TYPES.TABLE_ACTIONS.TOGGLE_REPLY,
        id
    }
}