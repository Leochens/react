import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import AppRoutes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {AppRoutes()}
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
