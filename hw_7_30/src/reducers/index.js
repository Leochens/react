import { tableReducer, headReducer } from './content'
import { studyInfoReducer } from './studyInfo'
import { studentListReducer } from './studentList'
import { combineReducers } from 'redux'


const RootRuducer = combineReducers({
    tableReducer,
    headReducer,
    studyInfoReducer,
    studentListReducer
});

export default RootRuducer;



