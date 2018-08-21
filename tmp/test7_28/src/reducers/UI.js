import { TOGGLE_SHOW } from '../const'

const initState = {
    showAllOrCompleted: false
}


const UIReducer = (state = initState, action) =>{

    switch(action.type) {
        
        case TOGGLE_SHOW:{
            return Object.assign({},state,{
                showAllOrCompleted:!state.showAllOrCompleted
            })
        }
        default: return state;
    }

}


export default UIReducer;