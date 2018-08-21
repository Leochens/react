import ACTION_TYPES from '../const';

const userSelect = (state = {currentDepartment:101} ,action) => {
    switch(action.type){
        case ACTION_TYPES.SWITCH_ACTIONS.SELECT_DEPARTMENT: {

            return Object.assign({},state,{

                currentDepartment: action.id
            })
        }
        default: return state;
    }
}

export default userSelect;