import { combineReducers }  from 'redux';
import topics from './topics';
import users from './users';
import comments from './comments';

const entities = combineReducers({
    topics,
    users,
    comments
})
export default entities