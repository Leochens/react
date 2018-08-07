import { combineReducers } from 'redux';
import classes from './classes';
import teachers from './teachers';
import lessons from './lessons';
import satisfied from './satisfied';
import students from './students'

const entities = combineReducers({
    classes,
    teachers,
    lessons,
    satisfied,
    students
})

export default entities;