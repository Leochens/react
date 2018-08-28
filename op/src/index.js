import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import routes from './routes';

//  测试模式
import { isTest } from './config';
// 测试文件
import Test from './test/test';


ReactDOM.render(
  <Provider store={store}>
    {
        isTest ?
          <Test /> :
          <Router routes={routes} history={browserHistory} />
        }
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
