import { schema } from 'normalizr';
import userSchema from './users';
import commentSchema from './comments';

const _topicSchema = new schema.Entity('topics', {
    user_info: userSchema,
    comments: commentSchema,
}, { idAttribute: 'id' });

const topicSchema = [_topicSchema];

export default topicSchema;