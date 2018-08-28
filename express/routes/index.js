var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
// res.send('ehdueh')
});

// 导出路由实例
module.exports = router;
