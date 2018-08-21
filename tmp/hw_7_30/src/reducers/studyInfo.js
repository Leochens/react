import ActionTypes from '../const/';
const initState = {
    basic_info: {
        real_teacher: {},
        virtual_teacher: {}
    },
    studyInfoEntities: {},
    studyInfoIds: []
}
export const studyInfoReducer = (state = initState, action) => {

    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FETCH_CLASS_INFO}_REQ`: {
            return state;
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_CLASS_INFO}_SUC`: {
            const { res } = action;
            return {
                basic_info: {
                    ...state.basic_info,
                    ...res.basic_info
                },
                studyInfoEntities: {
                    ...state.studyInfoEntities,
                    ...res.studyInfoList.entities.studyInfo
                },
                studyInfoIds: res.studyInfoList.result
            };
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_CLASS_INFO}_FAI`: {
            return state;
        }


        default: return state;
    }
}

export default studyInfoReducer