import ActionTypes from '../../const';


const students = (state = {
    isSearching: false,
    searchResult: [],
    entities: {}
}, action)=>{

    const { res } = action;
    switch(action.type){
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_SUC`: {
            return {
                ...state,
                entities: {
                    ...res.entities.students
                }
            }
        }       
        case ActionTypes.SEARCH_ACTIONS.SET_SEARCH_RESULT: {
            const { mid } = action;
            if (!mid) {                     //如果输入框为空 默认是不搜索 返回全部list
                return {
                    ...state,
                    isSearching: false
                };
            }
            const { entities } = state;
            const res = entities[mid];
            return Object.assign({}, state, { //显示搜索列表
                searchResult: res ? [res] : [],
                isSearching: true
            })
        }
        default: return state;
    }
}

export default students;