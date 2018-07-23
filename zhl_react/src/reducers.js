import {combineReducers} from 'redux'
import {TEST} from './actions'
const testState={text:"hello zhl"}
const itemControl =(state=testState,action)=>{
    switch(action.type)
    {
        case TEST:{
            return {text:action.text}
        }
        default:return state
    }
}


const MainReducers = combineReducers({
    itemControl
})
export default MainReducers
