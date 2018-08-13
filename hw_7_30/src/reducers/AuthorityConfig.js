import ACTION_TYPES from '../const';

const AuthorityConfig = (state = {
    AuthorityTreeRoot: [],
    willBeSelectedUser: [], //待选中
    selectedUser: []        //已选中
}, action) => {
    switch (action.type) {
        case ACTION_TYPES.SERVER_ACTIONS.FETCH_AUTHORITIES: {
            return {
                ...state,
                AuthorityTreeRoot: action.data.result
            }
        }
        default: return state;
    }
}

export default AuthorityConfig;