import ACTION_TYPES from '../const';

const AuthorityConfig = (
    state = {
    treeRoot: 101,
    willBeSelectedUserIds: [201,202], //待选中
    selectedUserIds: [203,204],        //已选中
}, action) => {
    switch (action.type) {
        // case ACTION_TYPES.SERVER_ACTIONS.FETCH_AUTHORITIES: {
        //     console.log('result',action.data.result);
        //     return {
        //         ...state,
        //         treeRoot: action.data.result
        //     }
        // }
        case ACTION_TYPES.SELECT_ACTIONS.SELECT_AUTHORITY_USER:{
            return {
                ...state,
                selectedUserIds:[
                    ...state.selectedUserIds,
                    action.id
                ]
            }
        }

        default: return state;
    }
}

export default AuthorityConfig;