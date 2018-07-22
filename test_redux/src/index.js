import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'       
import {Provider} from 'react-redux'
import MainReducer from './reducers'    //导入总的Reducer 状态改变器

const store = createStore(MainReducer); //创建一个状态仓库

ReactDOM.render(
    <Provider store={store}>            
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
