import ActionTyps from '../../constants/ActionTypes'

const topics = (state = {}, action) => {
    switch (action.type) {
        case `${ActionTyps.SERVER_ACTIONS.FET_TOPIC_LIST}_SUC`: {
            return {
                ...state,
                ...action.res.entities.topics
            }
        }
        case ActionTyps.TOPIC_ACTIONS.COMMENT_TOPIC:{
            const { 
                topicId,
                comment: {
                    id
                }
             } = action;
            return {
                ...state,
                [topicId]: {
                    ...state[topicId],
                    comments: state[topicId].comments.concat(id)
                }
            }
        }        
        default: return state;
    }
}
export default  topics;