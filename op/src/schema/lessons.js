import { schema } from 'normalizr'
import teachers from './teachers';
import classes from './classes';


const lessonSchema = new schema.Entity('lesson', {
    classInfo: classes,
    teacherInfo: teachers
}, { idAttribute: 'id' })

const lessonListSchema = [lessonSchema];

export default lessonListSchema;