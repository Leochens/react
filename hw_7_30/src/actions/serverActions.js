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
                const currentLessonsList = normalize(json.currentLessonsList, Schemas.lessonListSchema);
                const historyLessonsList = normalize(json.historyLessonsList, Schemas.lessonListSchema);
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
            },
            normalizeFunc: json => {
                const studyInfoList = normalize(json.list, Schemas.studyInfoListSchema);
                return {
                    studyInfoList,
                    basic_info: json.basic_info
                }
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
            },
            normalizeFunc: json => {
                const studentList = normalize(json, Schemas.studentListSchema);
                return studentList;
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
            },
            normalizeFunc: json => {
                const satisfiedList = normalize(json.list, Schemas.satisfiedListSchema);
                return satisfiedList;
            }
        }
    }
}
export const actionFetchHomeworkList = (rules) => {
    const { token, isReviewed } = rules;
    let type = '';
    if (token && !isReviewed) {
        type = ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_UNREVIEW;
    } else if (token && isReviewed) {
        type = ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_REVIEWED;
    } else if (!token && !isReviewed) {
        type = ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_UNREVIEW;
    } else {
        type = ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_REVIEWED;
    }
    return {
        SERVER_API: {
            type,
            url: BASE_URL + '/getHomeWork',
            param: rules,
            normalizeFunc: json => {
                console.log('json here=>', json);
                const homeworks = normalize(json, Schemas.homeworkListSchema);
                return homeworks;
            }
        }
    }
}