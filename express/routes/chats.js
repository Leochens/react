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

router.post('/chats', (req, res) => {
  res.send({
    "messages": {
      "ret": 1,
      "data": [
        {
          "id": 1001,
          "user_info": {
            "id": 1,
            "nick": "张鹤麟",
            "photo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088817&di=7e38ddf29a1ee4328f76f4637268546a&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150626%2F0034034838132999_b.jpg"
          },
          "content": {
            "text": "这是一条严肃的说说",
            "pics": [
              "http://pic.kuaizhan.com/g3/73/66/7d30-de74-49b5-b2d0-0f306fda35a642.jpeg/imageView/v1/thumbnail/200x200",
              "http://pic.kuaizhan.com/g3/af/28/8b54-6f50-4844-82fe-6e9bc9b0fddc36.jpeg/imageView/v1/thumbnail/200x200",
              "http://pic.kuaizhan.com/g3/af/28/8b54-6f50-4844-82fe-6e9bc9b0fddc36.jpeg/imageView/v1/thumbnail/200x200",
              "http://pic.kuaizhan.com/g3/73/66/7d30-de74-49b5-b2d0-0f306fda35a642.jpeg/imageView/v1/thumbnail/200x200",
              "http://pic.kuaizhan.com/g3/af/28/8b54-6f50-4844-82fe-6e9bc9b0fddc36.jpeg/imageView/v1/thumbnail/200x200"
            ]
          },
          "comments": [
            {
              "id": 2001,
              "commentator": {
                "id": 2,
                "nick": "小花猫",
                "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=703851cee543d940dcd9c4a24e79aed5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31bcf9f78fd8c18367adbb4e177.jpg"
              },
              "to":{
                "id": 1,
                "nick": "张鹤麟",
                "photo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088817&di=7e38ddf29a1ee4328f76f4637268546a&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150626%2F0034034838132999_b.jpg"
              },
              "comment_content": "啦啦啦啦wqdw爱疯舞elfa解放和我会融文化服务部分可我就完全封闭区我去我去玩烹饪技巧偶然服务器废弃物富人靠别人",
              "comment_time":"7:55"
            },
            {
              "id": 2006,
              "commentator": {
                "id": 2,
                "nick": "小花猫",
                "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=703851cee543d940dcd9c4a24e79aed5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31bcf9f78fd8c18367adbb4e177.jpg"
              },
              "comment_content": "啦啦啦啦egfew",
              "comment_time":"7:55"
  
            }
          ],
          "public_time": "2018-3-21",
          "isHot": false,
          "hits":[1,2,3]
        },
        {
          "id": 1002,
          "user_info": {
            "id": 1,
            "nick": "张鹤麟",
            "photo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088817&di=7e38ddf29a1ee4328f76f4637268546a&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150626%2F0034034838132999_b.jpg"
          },
          "content": {
            "text": "今天的雨好大啊",
            "pics": []
          },
          "comments": [],
          "public_time": "2018-4-23",
          "isHot": false,
          "hits":[]
        },
        {
          "id": 1003,
          "user_info": {
            "id": 2,
            "nick": "小花猫",
            "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=703851cee543d940dcd9c4a24e79aed5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31bcf9f78fd8c18367adbb4e177.jpg"
          },
          "content": {
            "text": "啦啦啦啦啦啦想念你",
            "pics": []
          },
          "comments": [],
          "public_time": "2017-3-21",
          "isHot": false,
          "hits":[]
        },
        {
          "id": 1004,
          "user_info": {
            "id": 3,
            "nick": "张阳阳",
            "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=6a33945b15793e1ad84eadb1d9c7ddb5&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01db7c59312efba8012193a394d95f.jpg%401280w_1l_2o_100sh.jpg"
          },
          "content": {
            "text": "又是一个星期天",
            "pics": []
          },
          "comments": [
            {
              "id": 2002,
              "commentator":{
                "id": 1,
                "nick": "张鹤麟",
                "photo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088817&di=7e38ddf29a1ee4328f76f4637268546a&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150626%2F0034034838132999_b.jpg"
              },
              "to":{
                "id": 2,
                "nick": "小花猫",
                "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=703851cee543d940dcd9c4a24e79aed5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31bcf9f78fd8c18367adbb4e177.jpg"
              },
              "comment_content": "卡愛啊啊啊",
              "comment_time":"7:55"
  
            }
          ],
          "public_time": "2017-1-16",
          "isHot": false,
          "hits":[]
        }
      ]
    },
    "ret":1
  })
})
module.exports = router;