import { combineReducers }  from 'redux';
import entities from './entities';
import topicList from './topicList'



const RootReducer = combineReducers({
    entities,
    topicList
})
export default RootReducer