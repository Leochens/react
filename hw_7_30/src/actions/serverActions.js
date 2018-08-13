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

export const actionFetchAuthorities = () => {
    return {
        type: ACTION_TYPES.SERVER_ACTIONS.FETCH_AUTHORITIES,
        data: {
            entities: {
                departments: {
                    101: {
                        id: 101,
                        name: '所有部门',
                        childs: [102, 103, 104, 105],
                        users: [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211]
                    },
                    102: {
                        id: 102,
                        name: '技术部',
                        childs: [106, 107],
                        users: [201, 202, 203, 206]
                    },
                    103: {
                        id: 103,
                        name: '财务部',
                        childs: [109],
                        users: [208, 209]
                    },
                    104: {
                        id: 104,
                        name: '工程部',
                        childs: [],
                        users: [210, 205]
                    },
                    105: {
                        id: 105,
                        name: '产品研发部',
                        childs: [108],
                        users: [204, 207, 211]
                    },
                    106: {
                        id: 106,
                        name: '技术一组',
                        childs: [],
                        users: [
                            201, 202

                        ]
                    },
                    107: {
                        id: 107,
                        name: '技术二组',
                        childs: [],
                        users: [
                            203, 206
                        ]
                    },
                    108: {
                        id: 108,
                        name: '产品一组',
                        childs: [],
                        users: [
                            204, 207, 211
                        ]
                    },
                    109: {
                        id: 109,
                        name: '财务一组',
                        childs: [],
                        users: [
                            208, 209
                        ]
                    },
                },
                users: {
                    201: {
                        id: 201,
                        name: '小李',
                        isSelected: false
                    },

                    202: {
                        id: 202,
                        name: '小宏',
                        isSelected: false
                    },

                    203: {
                        id: 203,
                        name: '小张',
                        isSelected: false
                    },

                    204: {
                        id: 204,
                        name: '小王',
                        isSelected: false
                    },
                    205: {
                        id: 205,
                        name: '小夜',
                        isSelected: false
                    },
                    206: {
                        id: 206,
                        name: '张山',
                        isSelected: false
                    },
                    207: {
                        id: 207,
                        name: '何炅',
                        isSelected: false
                    },
                    208: {
                        id: 208,
                        name: '张杰',
                        isSelected: false
                    },
                    209: {
                        id: 209,
                        name: '谢娜',
                        isSelected: false
                    },
                    210: {
                        id: 210,
                        name: '无心',
                        isSelected: false
                    },
                    211: {
                        id: 211,
                        name: '哈哈',
                        isReviewed: false
                    }
                }
            },
            result: [101]
        }
    }
}