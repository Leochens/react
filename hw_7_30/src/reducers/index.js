import { tableReducer, headReducer, satisfiedReducer } from './classInfo'
import { studyInfoReducer } from './studyInfo'
import { studentListReducer } from './studentList'
import { combineReducers } from 'redux'


const RootRuducer = combineReducers({
    tableReducer,
    headReducer,
    satisfiedReducer,
    studyInfoReducer,
    studentListReducer
});

export default RootRuducer;


