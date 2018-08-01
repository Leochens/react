import axios from 'axios';
//sna

const callServerApi = (url, param) => {

    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: url,
            data: param
        }).then(res => {
            if (res.data.ret === 1){
                return resolve(res);
            }
            return reject(res.data.errMsg);
        }).catch(err => {
            return reject(err);
        })
    })

}
export default store => next => action => {
    // console.log('hello midlleware');
    console.log(action);
    if (!action.SERVER_API) {
        return next(action)
    }
    const {
        type,
        url,
        param
    } = action.SERVER_API;
    next({
        type: `${type}_REQ`
    })
    return callServerApi(url,param).then(res => {
        return next({
            type:`${type}_SUC`,
            res
        })
    }
    ).catch(err => {
        return next({
            type:`${type}_FAI`,
            err
        })
    });
};

