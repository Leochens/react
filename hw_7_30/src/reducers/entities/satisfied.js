import ActionTypes from '../../const';


const satisfied = (state = {}, action)=>{
    const { res } = action;

    switch(action.type){
        case `${ActionTypes.SERVER_ACTIONS.FETCH_SATISFIED_LIST}_SUC`: {
            return {
                ...state,
                ...res.entities.satisfied
            }
        }
        default: return state;
    }
}
export default satisfied;