import ACTION_TYPES from '../const';

const AuthorityConfig = (
    state = {
    treeRoot: 0,
    selectedUserIds: [],        //已选中
    currentDepartment:101
}, action) => {
    switch (action.type) {
        case ACTION_TYPES.SERVER_ACTIONS.FETCH_AUTHORITIES: {
            console.log('result',action.data.result);
            return {
                ...state,
                treeRoot: action.data.result.pop()
            }
        }
        case ACTION_TYPES.SELECT_ACTIONS.SELECT_AUTHORITY_USER:{
            return {
                ...state,
                selectedUserIds:[
                    ...state.selectedUserIds,
                    action.id
                ]
            }
        }
        case ACTION_TYPES.SWITCH_ACTIONS.SELECT_DEPARTMENT: {

            return Object.assign({},state,{

                currentDepartment: action.id
            })
        }
        case ACTION_TYPES.SWITCH_ACTIONS.TOGGLE_SELECT_AUTHORITY_USER: {

            if(state.selectedUserIds.includes(action.id)) return state;
            return {
                ...state,
                selectedUserIds: [
                    ...state.selectedUserIds,
                    action.id
                ]
            }
        }
        default: return state;
    }
}

export default AuthorityConfig;