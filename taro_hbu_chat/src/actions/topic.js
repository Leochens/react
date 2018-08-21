import ACTIONS from '../constants/ActionTypes'

//评论
export const actionCommentTopic = (topicId, comment) => {
    return {
        type: ACTIONS.TOPIC_ACTIONS.COMMENT_TOPIC,
        topicId,
        comment
    }
}
// 点赞
export const actionHitTopic = ( topicId, who ) => {

    return {
        type: ACTIONS.TOPIC_ACTIONS.HIT_TOPIC,
        topicId,
        who
    }

}
