import ActionTyps from '../constants/ActionTypes' 
const topicList = (state = [], action) => {
    switch (action.type) {
        case `${ActionTyps.SERVER_ACTIONS.FET_TOPIC_LIST}_SUC`: {
            return action.res.result;
        }
        default: return state;
    }
}
export default  topicList;