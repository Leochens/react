import MessageList from './containers/MessageList'
import App from './App';
const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: MessageList },
    childRoutes: [
        { path: 'messages', component: MessageList },
        // { path: 'studentList(/:id)', component: StudentList },
        // { path: 'classInfo-:mid-:nick', component: ClassInfo },
        // { path: 'homeworkReview', component: HomeworkReview, }
    ]
}]

export default routes;