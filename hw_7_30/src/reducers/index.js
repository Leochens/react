import { combineReducers } from 'redux'
import classInfoReducer from './classInfo'
import studyInfoReducer from './studyInfo'
import studentListReducer from './studentList'
import entitiesReducer from './entities';

const RootRuducer = combineReducers({
    classInfoReducer,
    studyInfoReducer,
    studentListReducer,

    entitiesReducer
});


export default RootRuducer;



