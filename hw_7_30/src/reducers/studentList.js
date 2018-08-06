// import React from 'react';
import ActionTypes from '../const/';
const initState = {
    isSearching:false,
    searchResultIds: [],
    studentEntitis: {},
    studentIds: []
}
export const studentListReducer = (state = initState, action) => {
    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_REQ`: {
            // console.log('发起 到了FETCH_STUDENT_LIST的reducer里了，数据如下');
            return state;
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_SUC`: {
            // console.log('成功 到了FETCH_STUDENT_LIST的reducer里了，数据如下');
            console.log('student List =>  ',action.res);
            const { res } = action; 
            const tmp =  {
                ...state,
                studentEntitis: {
                    ...state.studentEntitis,
                    ...res.entities.students
                },
                studentIds: [
                    ...state.studentIds,
                    ...res.result
                ]
            }
            console.log('student tmp => ',tmp);
            return tmp;
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_FAI`: {
            // console.log('失败 到了FETCH_STUDENT_LIST的reducer里了，数据如下');
            // console.log(action.res);
            return state;
        }
        case ActionTypes.SEARCH_ACTIONS.SET_SEARCH_RESULT: {
            const { mid } = action;
            if(!mid){               //如果输入框为空 默认是不搜索 返回全部list
                return {
                    ...state,
                    isSearching:false
                };
            }
            const { studentList } = state;
            const res = studentList.filter(item => {
                return (item.mid).toString() === mid
            });
            return Object.assign({},state,{ //显示搜索列表
                searchResult:res,
                isSearching:true
            })
        }

        default: return state;
    }
}