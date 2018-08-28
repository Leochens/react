import { combineReducers } from 'redux';
import TodoData from './TodoData';
import UI from './UI';

const RootReducer = combineReducers({
    TodoData,
    UI
});
export default RootReducer;


