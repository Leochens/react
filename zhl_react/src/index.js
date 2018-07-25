import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import MainReducer from './reducers/reducers'

const store = createStore(MainReducer)


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, document.getElementById('root'));


registerServiceWorker();



// const ADD = 'ADD'

// const initState = {
//     v:0
// }


// const Reducer = (state=initState,action)=>{

//     console.log("Reducer")
//     switch(action.type)
//     {
//         case ADD:{
//             console.log(action.extra)
//             return {
//                 v:state.v+1
//             }
//         }
//         default:return state;
//     }

// }


// const store = createStore(Reducer);


// const actionCreator=()=>{
//     return {
//         type:ADD,
//         extra:"hello"
//     }
// }

// const addOne = ()=>{

//     console.log(store.getState())
//     store.dispatch(actionCreator())

// }

// // store.subscribe(Reducer);
// console.log("edbewjdbk")
// ReactDOM.render(
//     <div>
//        <h1>{store.getState().v}</h1>
//        <button onClick={addOne}>add</button>
//     </div>
//     , document.getElementById('root'));
    
    