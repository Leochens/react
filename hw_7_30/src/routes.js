import ClassInfo from './containers/ClassInfo/ClassInfo';
import StudyInfo from './containers/StudyInfo/StudyInfo';
import StudentList from './containers/StudentList/StudentList';
import HomeworkReview from './containers/HomeworkReview/HomeworkReview';
import ReviewList from './containers/ReviewList/ReviewList';
import App from './App';

const review = {
    path: 'homeworkReview',
    component: HomeworkReview,
    indexRoute: { component: ReviewList },
    childRoutes: [
            { path: 'unReviewList', component: ReviewList },
            { path: 'reviewedList', component: ReviewList },
            { path: 'unReviewListAll', component: ReviewList },
            { path: 'reviewedListAll', component: ReviewList },
    ]
}
const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: StudentList },
    childRoutes: [
        { path: 'studyInfo(/:id)', component: StudyInfo },
        { path: 'studentList(/:id)', component: StudentList },
        { path: 'classInfo-:mid-:nick', component: ClassInfo },
        review
    ]
}]

export default routes;