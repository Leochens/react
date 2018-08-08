import ActionsTypes from '../const';

export const actionRejectComment = (id, reason) => {

    return {
        type:ActionsTypes.COMMENT_ACTIONS.REJECT_COMMENT,
        id,
        reason
    }
}
