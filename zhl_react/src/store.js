import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import RootReducer from './reducers/index.js';
const logger = createLogger();


const APIService = store => next => action => {         //中间件

}

const store = createStore(
    RootReducer,
    applyMiddleware( 
        // APIService, 
        logger
    )
);

export default store;
