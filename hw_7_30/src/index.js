import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store'
import { Router,browserHistory } from 'react-router';

import ClassInfo from './containers/ClassInfo/ClassInfo';
import StudyInfo from './containers/StudyInfo/StudyInfo';
import StudentList from './containers/StudentList/StudentList';
const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: ClassInfo },
    childRoutes: [
      { path: 'studyInfo', component: StudyInfo },
      { path: 'studentList', component: StudentList },
      { path: 'classInfo', component: ClassInfo }
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
