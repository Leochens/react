import  {tableReducer,headReducer} from './content'
// import apiReducer from './api'
import { combineReducers } from 'redux'


const RootRuducer = combineReducers({
    tableReducer,
    headReducer
});

export default RootRuducer;



