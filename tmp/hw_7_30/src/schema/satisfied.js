import { schema } from 'normalizr'
import teachers from './teachers';
import classes from './classes';

const satisfiedSchema = new schema.Entity('satisfied', {
    class_info: classes,
    teacher_info: teachers
}, { idAttribute: 'time' })
const satisfiedListSchema = [satisfiedSchema];

export default satisfiedListSchema;