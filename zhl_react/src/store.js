import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import RootReducer from './reducers/index.js';
const logger = createLogger();
const store = createStore(
    RootReducer,
    applyMiddleware(logger)
);

export default store;
