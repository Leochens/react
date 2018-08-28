import request from 'request';


const _request = (options, callback = (error, response, data) => { }) => {
    const defaultOptions = {
        headers: { "Connection": "close" },
        url: '',
        method: 'get',
        json: true,
    }
    const finallyOption = {
        ...defaultOptions,
        ...options
    }
    return request(finallyOption, callback);
}   


export default _request;