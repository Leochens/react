import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store'
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { isTest } from './config';      //测试模式
//测试文件
import Test from './test.js'
ReactDOM.render(
    <Provider store={store}>
        {
            isTest ?
            <Test /> :
            <Router routes={routes} history={browserHistory} />
        }
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
