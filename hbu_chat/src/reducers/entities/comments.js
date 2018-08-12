import ActionTyps from '../../constants/ActionTypes';

const comments = (state = {}, action) => {
    switch (action.type) {
        case `${ActionTyps.SERVER_ACTIONS.FET_TOPIC_LIST}_SUC`: {
            return {
                ...state,
                ...action.res.entities.comments
            }
        }
        default: return state;
    }
}
export default comments;