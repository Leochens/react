import ACTION_TYPES from '../const'
const BASE_URL = 'http://xly-wkop.xiaoniangao.cn';
export const actionFetchUserInfo = (mid) => {
    return {
        SERVER_API: {
            type: ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO,
            url: BASE_URL + '/getUserInfo',
            param: {
                mid
            }
        }
    }
}
export const actionFetchLessonInfo = (mid) => {
    return {
        SERVER_API: {
            type: ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO,
            url: BASE_URL + '/getLessonInfo',
            param: {
                mid
            }
        }
    }
}
export const actionFetchStudyInfo = (id) => {
    return {
        SERVER_API: {
            type: ACTION_TYPES.SERVER_ACTIONS.FETCH_CLASS_INFO,
            url: BASE_URL + '/getClassInfo',
            param: {
                id
            }
        }
    }
}
export const actionFetchStudentList = (id) => {
    return {
        SERVER_API: {
            type: ACTION_TYPES.SERVER_ACTIONS.FETCH_STUDENT_LIST,
            url: BASE_URL + '/getStudentList',
            param: {
                id
            }
        }
    }
}