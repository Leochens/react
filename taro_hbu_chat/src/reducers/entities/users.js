import ActionTyps from '../../constants/ActionTypes'

const users = (state = {}, action) => {
    switch (action.type) {
        case `${ActionTyps.SERVER_ACTIONS.FET_TOPIC_LIST}_SUC`: {
            return {
                ...state,
                ...action.res.entities.users
            }
        }
        default: return state;
    }
}
export default users;