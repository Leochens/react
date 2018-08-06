import { combineReducers } from 'redux'
import classInfoReducer from './classInfo'
import studyInfoReducer from './studyInfo'
import studentListReducer from './studentList'


const RootRuducer = combineReducers({
    classInfoReducer,
    studyInfoReducer,
    studentListReducer
});


export default RootRuducer;



