const express = require('express');

const Router = express.Router();

// 模板 template 
// ejs
// pug (jade)
// swig 

Router.get('/', function (req, res) {
    // res.send('Hello World!');
    res.render('root',{
        pp: 'sjdkbj'
    });
});
Router.get('/hello', function (req, res) {
    res.send('this is hello page')
})

module.exports = Router;