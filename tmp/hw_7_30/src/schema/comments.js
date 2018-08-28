import { schema } from 'normalizr'

const comments = new schema.Entity('comments', {}, { idAttribute: 'id' });
const commentsSchema = [ comments ];
export default commentsSchema;