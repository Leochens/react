import ClassInfo from './containers/ClassInfo/ClassInfo';
import StudyInfo from './containers/StudyInfo/StudyInfo';
import StudentList from './containers/StudentList/StudentList';
import App from './App';

const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: StudentList },
    childRoutes: [
        { path: 'studyInfo(/:id)', component: StudyInfo },
        { path: 'studentList(/:id)', component: StudentList },
        { path: 'classInfo-:mid-:nick', component: ClassInfo }
    ]
}]

export default routes;