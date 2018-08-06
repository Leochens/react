import ACTION_TYPES from '../const'
export const actionToggleReply = (time) => {
    return {
        type: ACTION_TYPES.TABLE_ACTIONS.TOGGLE_REPLY,
        time
    }
}