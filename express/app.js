const express = require('express');
const route = require('./route')
const app = new express();

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(route);

app.listen(3000,function (){
    console.log('port 3000 ');
} )