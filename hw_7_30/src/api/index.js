import ActionTypes from '../const';
import axios from 'axios';

export const actionFetchUserInfo = (mid='', next) => {
    next({
        type: `${ActionTypes.API_ACTIONS.FETCH_USER_INFO}_REQ`
    });
    axios({
        method: "POST",
        url: 'http://xly-wkop.xiaoniangao.cn/getUserInfo',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
            mid
        }
    })
    .then(res => {
        next({
            type: `${ActionTypes.API_ACTIONS.FETCH_USER_INFO}_SUC`,
            res
        });

    })
    .catch(err => {
        next({
            type: `${ActionTypes.API_ACTIONS.FETCH_USER_INFO}_FAI`,
            err
        });
    })

}

export const actionFetchLessonInfo = (mid='', next) => {
    next({
        type: `${ActionTypes.API_ACTIONS.FETCH_LESSON_INFO}_REQ`
    });
    axios({
        method: "POST",
        url: 'http://xly-wkop.xiaoniangao.cn/getLessonInfo',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
            mid
        }
    })
    .then(res => {
        next({
            type: `${ActionTypes.API_ACTIONS.FETCH_LESSON_INFO}_SUC`,
            res
        })
    })
    .catch(err => {
        next({
            type: `${ActionTypes.API_ACTIONS.FETCH_LESSON_INFO}_FAI`,
            err
        })
    })

}
