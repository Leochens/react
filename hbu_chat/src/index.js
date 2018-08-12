import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store'
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(
    <Provider store={store}>
            <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
