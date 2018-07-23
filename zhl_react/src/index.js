import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import MainReducer from './reducers/reducers'

const store = createStore(MainReducer)


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, document.getElementById('root'));


registerServiceWorker();
