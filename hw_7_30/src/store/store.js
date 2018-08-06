import {createStore,applyMiddleware} from 'redux';
import RootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import serverApi from '../middleware/serverApi';
const logger = createLogger();
const store = createStore(
    RootReducer,
    applyMiddleware(serverApi ,logger)
);

export default store;

