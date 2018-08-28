import { combineReducers }  from 'redux';
import entities from './entities';
import topicList from './topicList';
import ui from './ui';



const RootReducer = combineReducers({
    entities,
    topicList
})
export default RootReducer