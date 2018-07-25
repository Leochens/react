import {createStore} from 'redux'
import MainReducer from './reducers/reducers'
const store = createStore(MainReducer);
export default  store;

