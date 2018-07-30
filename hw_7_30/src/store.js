import {createStore,applyMiddleware} from 'redux';
import RootReducer from './reducers';
import { createLogger } from 'redux-logger';
const logger = createLogger();
const store = createStore(
    RootReducer,
    applyMiddleware(logger)
);

export default store;

