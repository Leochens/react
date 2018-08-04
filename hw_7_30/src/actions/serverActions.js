import ACTION_TYPES from '../const';
import { normalize } from 'normalizr';
import Schemas from '../schema';
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
            },
            normalizeFunc: json => {
                console.log('json Here =>',json);
                const currentLessonsList = normalize(json.currentLessonsList, Schemas.lessonListSchema);
                const historyLessonsList = normalize(json.historyLessonsList, Schemas.lessonListSchema);
                console.log('扁平化=>',currentLessonsList,historyLessonsList);
                return {
                    currentLessonsList,
                    historyLessonsList
                }
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
export const actionFetchSatisfiedList = (mid) => {
    return {
        SERVER_API: {
            type: ACTION_TYPES.SERVER_ACTIONS.FETCH_SATISFIED_LIST,
            url: BASE_URL + '/getSatisfiledList',
            param: {
                mid
            }
        }
    }
}