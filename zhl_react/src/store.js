import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import MainReducer from './reducers/reducers';
const logger = createLogger();
const store = createStore(
    MainReducer,
    applyMiddleware(logger)
);

export default store;
