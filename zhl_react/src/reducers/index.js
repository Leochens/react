import { combineReducers } from 'redux'
import MessageReducer from './MessageReducer'
import UIReducer from './UIReducer'


const RootReducer = combineReducers({
    MessageReducer,
    UIReducer
})
export default RootReducer
