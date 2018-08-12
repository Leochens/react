import ACTIONS from '../constants/ActionTypes'

//评论
export const actionCommentTopic = (topicId, comment) => {
    return {
        type: ACTIONS.TOPIC_ACTIONS.COMMENT_TOPIC,
        topicId,
        comment
    }
}
//回复评论
// export const actionReplyComment = (topicId, commentatorId, receiverId, comment) => {
//     return {
//         type: ACTIONS.TOPIC_ACTIONS.COMMENT_TOPIC,
//         topicId,
//         receiverId,
//         commentatorId,
//         comment
//     }
// }