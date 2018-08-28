// import db from './db';
// const express = require('express');
// import request from 'request';
// const Router = express.Router();

// // 模板 template 
// // ejs
// // pug (jade)
// // swig 


// Router.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

// Router.get('/', function (req, res) {
//     db.connection().query('SELECT * FROM todos ', (err, result) => {
//         if (err) {
//             console.log('query err : ', err);
//             return
//         }

//         res.send(result);
//     })
// });

// Router.post('/messages', function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.json({
//         "ret": 1,
//         "data": [
//             {
//                 "id": 1001,
//                 "user_info": {
//                     "id": 1,
//                     "nick": "张鹤麟",
//                     "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088817&di=7e38ddf29a1ee4328f76f4637268546a&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150626%2F0034034838132999_b.jpg"
//                 },
//                 "content": {
//                     "text": "这是一条严肃的说说",
//                     "pics": [
//                         "http://pic.kuaizhan.com/g3/73/66/7d30-de74-49b5-b2d0-0f306fda35a642.jpeg/imageView/v1/thumbnail/200x200",
//                         "http://pic.kuaizhan.com/g3/af/28/8b54-6f50-4844-82fe-6e9bc9b0fddc36.jpeg/imageView/v1/thumbnail/200x200",
//                         "http://pic.kuaizhan.com/g3/af/28/8b54-6f50-4844-82fe-6e9bc9b0fddc36.jpeg/imageView/v1/thumbnail/200x200",
//                         "http://pic.kuaizhan.com/g3/73/66/7d30-de74-49b5-b2d0-0f306fda35a642.jpeg/imageView/v1/thumbnail/200x200",
//                         "http://pic.kuaizhan.com/g3/af/28/8b54-6f50-4844-82fe-6e9bc9b0fddc36.jpeg/imageView/v1/thumbnail/200x200"
//                     ]
//                 },
//                 "comments": [
//                     {
//                         "id": 2001,
//                         "commentator": {
//                             "id": 2,
//                             "nick": "小花猫",
//                             "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=703851cee543d940dcd9c4a24e79aed5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31bcf9f78fd8c18367adbb4e177.jpg"
//                         },
//                         "to": {
//                             "id": 1,
//                             "nick": "张鹤麟",
//                             "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088817&di=7e38ddf29a1ee4328f76f4637268546a&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150626%2F0034034838132999_b.jpg"
//                         },
//                         "comment_content": "啦啦啦啦wqdw爱疯舞elfa解放和我会融文化服务部分可我就完全封闭区我去我去玩烹饪技巧偶然服务器废弃物富人靠别人",
//                         "comment_time": "7:55"
//                     },
//                     {
//                         "id": 2006,
//                         "commentator": {
//                             "id": 2,
//                             "nick": "小花猫",
//                             "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=703851cee543d940dcd9c4a24e79aed5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31bcf9f78fd8c18367adbb4e177.jpg"
//                         },
//                         "comment_content": "啦啦啦啦egfew",
//                         "comment_time": "7:55"

//                     }
//                 ],
//                 "public_time": "2018-3-21",
//                 "isHot": false,
//                 "hits": [1, 2, 3]
//             },
//             {
//                 "id": 1002,
//                 "user_info": {
//                     "id": 1,
//                     "nick": "张鹤麟",
//                     "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088817&di=7e38ddf29a1ee4328f76f4637268546a&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150626%2F0034034838132999_b.jpg"
//                 },
//                 "content": {
//                     "text": "今天的雨好大啊",
//                     "pics": []
//                 },
//                 "comments": [],
//                 "public_time": "2018-4-23",
//                 "isHot": false,
//                 "hits": []
//             },
//             {
//                 "id": 1003,
//                 "user_info": {
//                     "id": 2,
//                     "nick": "小花猫",
//                     "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=703851cee543d940dcd9c4a24e79aed5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31bcf9f78fd8c18367adbb4e177.jpg"
//                 },
//                 "content": {
//                     "text": "啦啦啦啦啦啦想念你",
//                     "pics": []
//                 },
//                 "comments": [],
//                 "public_time": "2017-3-21",
//                 "isHot": false,
//                 "hits": []
//             },
//             {
//                 "id": 1004,
//                 "user_info": {
//                     "id": 3,
//                     "nick": "张阳阳",
//                     "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=6a33945b15793e1ad84eadb1d9c7ddb5&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01db7c59312efba8012193a394d95f.jpg%401280w_1l_2o_100sh.jpg"
//                 },
//                 "content": {
//                     "text": "又是一个星期天",
//                     "pics": []
//                 },
//                 "comments": [
//                     {
//                         "id": 2002,
//                         "commentator": {
//                             "id": 1,
//                             "nick": "张鹤麟",
//                             "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088817&di=7e38ddf29a1ee4328f76f4637268546a&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150626%2F0034034838132999_b.jpg"
//                         },
//                         "to": {
//                             "id": 2,
//                             "nick": "小花猫",
//                             "photo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534086088818&di=703851cee543d940dcd9c4a24e79aed5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31bcf9f78fd8c18367adbb4e177.jpg"
//                         },
//                         "comment_content": "卡愛啊啊啊",
//                         "comment_time": "7:55"

//                     }
//                 ],
//                 "public_time": "2017-1-16",
//                 "isHot": false,
//                 "hits": []
//             }
//         ]

//     })

// })

// Router.get('/userLogin', function (req, res) {
//     var options = {
//         headers: { "Connection": "close" },
//         url: 'http://mokis.top',
//         method: 'get',
//         json: true,
//         // body: req.body
//     };
//     function callback(error, response, data) {
//         if (!error && response.statusCode == 200) {
//             console.log('------接口数据------');
//             console.log(data);
//             // res.json(data)
//         }
//     }
//     request(options, callback);
//     console.log(req.query);
//     res.send(req.query)
// })
// module.exports = Router;