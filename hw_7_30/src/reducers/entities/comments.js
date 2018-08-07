import ActionTypes from '../../const';


const comments = (state = {}, action)=>{

    const { res } = action;
    switch(action.type){
       
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST}_SUC`: {
            return {
                ...state,
                ...res.entities.comments
            }
        }
        
        default: return state;
    }
}

export default comments;