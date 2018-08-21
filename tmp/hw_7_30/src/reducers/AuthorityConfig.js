import ACTION_TYPES from '../const';
import { array2set } from '../tools/array2setTool';
const AuthorityConfig = (
    state = {
        treeRoot: 0,
        selectedMembersIds: [205,207],        //已选中
        currentDepartment: 101
    }, action) => {
    switch (action.type) {
        case ACTION_TYPES.SERVER_ACTIONS.FETCH_AUTHORITIES: {
            console.log('result', action.data.result);
            return {
                ...state,
                treeRoot: action.data.result.pop()
            }
        }
        case ACTION_TYPES.SELECT_ACTIONS.SELECT_AUTHORITY_USER: {
            return {
                ...state,
                selectedMembersIds: [
                    ...state.selectedMembersIds,
                    action.id
                ]
            }
        }
        case ACTION_TYPES.SWITCH_ACTIONS.SELECT_DEPARTMENT: {

            return Object.assign({}, state, {
                currentDepartment: action.id
            })
        }
        case ACTION_TYPES.SELECT_ACTIONS.ADD_AUTHORITY_MEMBERS: {

            if (Array.isArray(action.ids) && action.ids.length === 0) {
                return state;
            }
            // console.log(action.ids);
            return {
                ...state,
                selectedMembersIds: array2set([
                    ...state.selectedMembersIds,
                    ...action.ids
                ])
            }
        }
        case ACTION_TYPES.SELECT_ACTIONS.DEL_AUTHORITY_MEMBERS: {
            if (Array.isArray(action.ids) && action.ids.length === 0) {
                return state;
            }
            const oldIds = [...state.selectedMembersIds];
            const newIds = oldIds.filter(id => {
                return !action.ids.includes(id)
            })
            return {
                ...state,
                selectedMembersIds: newIds
            }
        }
        default: return state;
    }
}

export default AuthorityConfig;