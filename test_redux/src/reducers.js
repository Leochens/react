import {combineReducers} from 'redux'
import {CHANGE_TEXT} from './actions'
const textControl=(state={text:"hello World"},action)=>{

    switch(action.type){
        case CHANGE_TEXT:{
            return Object.assign(...state,{text:action.text})
        }
        default:return state
    }
}

const MainReducer =combineReducers({
    textControl
})
export default MainReducer  
