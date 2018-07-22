import {combineReducers} from 'redux'
import {ADD,INCREASE} from './actions'


function counter(state={cnt:0},action)
{
    const cnt=state.cnt
    switch(action.type)
    {
        case ADD: {
            console.log(action.thing);
            console.log("reducer"+state)
            return state+1};
        case INCREASE:{
            // return  Object.assign({},state,{value:state.value+1})
            console.log(state)
            return {cnt:cnt+1}
        }
        default:return state;
    }
}

const counterApp = combineReducers({
    counter
}) 

export default counterApp;