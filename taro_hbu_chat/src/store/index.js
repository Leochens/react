import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import serverApi from '../middleware/serverApi';
const middlewares = [
  thunkMiddleware,
  serverApi,
  createLogger()
];

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}

