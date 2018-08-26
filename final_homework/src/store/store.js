import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import serverApi from '../middlewares/serverApi';
import gateway from '../middlewares/gateway';
import RootReducer from '../reducers';


const logger = createLogger();
const store = createStore(
  RootReducer,
  applyMiddleware(gateway,serverApi, logger)
);

export default store;
