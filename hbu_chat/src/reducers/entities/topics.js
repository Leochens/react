import ActionTyps from '../../constants/ActionTypes'

const topics = (state = {}, action) => {
    switch (action.type) {
        case `${ActionTyps.SERVER_ACTIONS.FET_TOPIC_LIST}_SUC`: {
            return {
                ...state,
                ...action.res.entities.topics
            }
        }
        default: return state;
    }
}
export default  topics;