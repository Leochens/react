import contentReducer from './content'
// import apiReducer from './api'
import { combineReducers } from 'redux'


const RootRuducer = combineReducers({
    contentReducer
});

export default RootRuducer;



