import { combineReducers } from 'redux'
import classInfoReducer from './classInfo'
import studyInfoReducer from './studyInfo'
import studentListReducer from './studentList'
import entitiesReducer from './entities';
import homeworkReviewReducer from './homeworkReview';
import AuthorityConfigReducer from './AuthorityConfig';


const RootRuducer = combineReducers({
    entitiesReducer,
    classInfoReducer,
    studyInfoReducer,
    studentListReducer,
    homeworkReviewReducer,
    AuthorityConfigReducer
});


export default RootRuducer;



