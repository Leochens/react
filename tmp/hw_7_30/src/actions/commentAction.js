import ActionsTypes from '../const';

export const actionRejectComment = (id, reason) => {

    return {
        type:ActionsTypes.COMMENT_ACTIONS.REJECT_COMMENT,
        id,
        reason
    }
}

export const actionCommentHomework= (homeworkId, comment) => {
    return {
        type: ActionsTypes.COMMENT_ACTIONS.COMMENT_HOMEWORK,
        homeworkId,
        comment
    }
}