import ActionTypes from '../../const';


const admins = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.SERVER_ACTIONS.FETCH_AUTHORITIES:{
            return {
                ...state,
                ...action.data.entities.users
            }
        }
        case ActionTypes.SWITCH_ACTIONS.TOGGLE_SELECT_AUTHORITY_USER: {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    isSelected: true
                }
            }
        }
    
        default: return state;
    }
    
}

export default admins;