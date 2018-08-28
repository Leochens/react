import { combineReducers } from 'redux';
import classes from './classes';
import teachers from './teachers';
import lessons from './lessons';
import satisfied from './satisfied';
import students from './students'
import comments from './comments';
import homeworks from './homeworks';
import departments from './departments';
import admins from './admins';

const entities = combineReducers({
    classes,
    teachers,
    lessons,
    satisfied,
    students,
    comments,
    homeworks,
    departments,
    admins
})

export default entities;