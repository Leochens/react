import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store'
import { Router, browserHistory } from 'react-router';

import ClassInfo from './containers/ClassInfo/ClassInfo';
import StudyInfo from './containers/StudyInfo/StudyInfo';
import StudentList from './containers/StudentList/StudentList';
import { normalize, schema } from 'normalizr';
const data = [
    {
        H: {
            id: 2
        },
        name: 'hhh'
    },
    {
        H: {
            id: 3
        },
        name: 'ppp'
    }
]
const newSchema = new schema.Entity('test');
const newSchemaList = normalize(data,newSchema);
console.log('this is schema List ',newSchemaList);


const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: StudentList },
    childRoutes: [
        { path: 'studyInfo(/:id)', component: StudyInfo },
        { path: 'studentList(/:id)', component: StudentList },
        { path: 'classInfo(-:mid-:nick)', component: ClassInfo }
    ]
}]
ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}>
            {/* <App /> */}
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
