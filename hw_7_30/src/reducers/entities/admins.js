import ActionTypes from '../../const';


const admins = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SERVER_ACTIONS.FETCH_AUTHORITIES: {
            return {
                ...state,
                ...action.data.entities.users
            }
        }
        //拿到所有选定的人的id 然后统一的做isselected字段取反
        case ActionTypes.SELECT_ACTIONS.ADD_AUTHORITY_MEMBERS: {
            const newState = { ...state };
            const { ids } = action;
            ids.forEach(id => {
                newState[id].isSelected = true;
            });
            return newState
        }
        default: return state;
    }
}

export default admins;