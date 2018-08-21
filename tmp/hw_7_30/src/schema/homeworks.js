import { schema } from 'normalizr'
import teachers from './teachers';
import classes from './classes';
import comments from './comments';

const homeworks = new schema.Entity('homeworks', {
    classInfo: classes,
    comments: comments,
    teacherInfo: teachers
}, { idAttribute: 'id' });
const homeworkSchema = [ homeworks ];
export default homeworkSchema;