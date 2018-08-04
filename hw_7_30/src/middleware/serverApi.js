import axios from 'axios';
//sna

const callServerApi = (url, param, normalizeFunc) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: url,
            data: param
        }).then(res => {
            console.log('网络请求结束的最原始数据',res);
            if (res.data.ret === 1 ){
                return resolve( normalizeFunc ? normalizeFunc(res.data.data) : res.data.data);
            }
            return reject(res);
        }).catch(err => {
            return reject(err);
        })
    })

}
export default store => next => action => {
    // console.log('hello midlleware');
    // console.log(action);
    if (!action.SERVER_API) {
        return next(action)
    }
    const {
        type,
        url,
        param,
        normalizeFunc
    } = action.SERVER_API;

    if(typeof(type)!=='string' || typeof(url)!=='string'){
        throw new Error('type 和 url 必须为字符串')
    }
    if(typeof(param)!=='object'){
        throw new Error('param必须为对象')
    }

    next({
        type: `${type}_REQ`
    })
    return callServerApi(url,param,normalizeFunc).then(res => {
        console.log('可能是normalize化的数据',res);
        return next({
            type:`${type}_SUC`,
            res
        })
    }
    ).catch(err => {
        // console.log('请求错误',err);
        return next({
            type:`${type}_FAI`,
            err
        })
    });
};

