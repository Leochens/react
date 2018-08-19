import express from 'express';
import route from './route';
const app = new express();

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(route);

app.listen(3001, () => {
    console.log('express is listening on port 3001 ');
})