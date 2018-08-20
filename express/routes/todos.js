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

    request({
        url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${AppSecret}&js_code=${jscode}&grant_type=authorization_code`
    }, (error, response, data) => {
        if (!error && response.statusCode == 200) {
            console.log('------接口数据------');
            console.log(data);
            if (data.openid) {
                const query = db.connection();
                // console.log('openid', data.openid);
                const openid = data.openid;
                console.log('openid', openid);
                query.query(`SELECT * FROM users WHERE openid = "${openid}"`, (err, result) => {
                    if (err) {
                        console.log('query err : ', err);
                        return;
                    }
                    if (result.length === 0) {
                        const info = "用户不存在 ， 将会自动创建";
                        query.query(`INSERT INTO users(openId) values ("${openid}")`, (err, result) => {
                            if (err) {
                                console.log('query err : ', err);
                                return;
                            }
                            if (result) {
                                console.log('创建成功');
                                // res.send(info + '创建成功');

                            } else {
                                console.log('创建失败');
                                // res.send(info + '创建失败');
                            }
                        })

                    } else {
                        const userId = result.pop().id;
                        console.log('用户已存在');
                        query.query(`SELECT * FROM todos where userId = "${userId}"`, (err, result) => {
                            if (err) {
                                console.log('query err : ', err);
                                return;
                            }
                            res.send(result);
                        })
                    }
                    console.log('查询结果', result);
                })
                // res.send(queryRes);
            } else {
                console.log('openid 不存在！');
                return;
            }
        }
    })
})

module.exports = router;