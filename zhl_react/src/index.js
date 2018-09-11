import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './container/App/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Test from './container/Test/Test';

ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
