import ActionTypes from '../../const';


const departments = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.SERVER_ACTIONS.FETCH_AUTHORITIES:{
            return {
                ...state,
                ...action.data.entities.departments
            }
        }
        default: return state;
    }
}

export default departments;