import { schema } from 'normalizr';
import userSchema from './users';
const _commentSchema = new schema.Entity('comments', {
    commentator: userSchema
}, { idAttribute: 'id' });

const commentSchema = [_commentSchema];

export default commentSchema;