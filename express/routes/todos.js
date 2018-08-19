import express from 'express';
import Models from '../models'
const router = express.Router();
const { db, request } = Models;
const appId = 'wxc2eaa2fc53c9dc27';
const AppSecret = 'e6d90b5721cf096239d287ef9507c733';
router.get('/', (req, res) => {
    res.send('hello')
})

router.get('/userLogin', (req, res) => {
    const { jscode } = req.query;
    res.send(`得到的jscode:${jscode}`);

    request({
        url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${AppSecret}&js_code=${jscode}&grant_type=authorization_code`
    }, (error, response, data) => {
        if (!error && response.statusCode == 200) {
            console.log('------接口数据------');
            console.log(data);
            // res.json(data)
            // res.send(`解析后的用户id:${data.openid}`);
        }
    })
})

module.exports = router;