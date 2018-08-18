import ActionTyps from '../../constants/ActionTypes'

const topics = (state = {}, action) => {
    switch (action.type) {

        // 获取
        case `${ActionTyps.SERVER_ACTIONS.FET_TOPIC_LIST}_SUC`: {
            return {
                ...state,
                ...action.res.entities.topics
            }
        }
        // 评论
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
        // 点赞  
        case ActionTyps.TOPIC_ACTIONS.HIT_TOPIC: {
            const {
                topicId,
                who
            } = action;
            const hits = [ ...state[topicId].hits ];
            console.log('index of',hits.indexOf(who));
            if( hits.includes(who) ){
                hits.splice(hits.indexOf(who),1);
            }else{
                hits.unshift(who);
            } 
            return {
                ...state,
                [topicId]: {
                    ...state[topicId],
                    hits
                }
            }
        }
        default: return state;
    }
}
export default  topics;