import { combineReducers } from 'redux'
import ITEM from '../actions/itemControlAction'
import initState from '../store'

import ACTION from '../constants'

const itemControl = (state = initState, action) => {
    switch (action.type) {

        case ITEM.TYPE.handleSetTopMsg: {           //置顶

            const {id} = action;
            console.log(id)
            const newMsg = state.messages.slice();
            const item = newMsg.splice(id,1);
            newMsg.unshift(item[0]);
            console.log(newMsg)
            return Object.assign({},state,{messages:newMsg})
        }       
        case ITEM.TYPE.handleDeleteMsg: {           //删除
            const {id} = action;
            const newMsg = state.messages.slice();
            newMsg.splice(id,1);
            return Object.assign({...state},{messages:newMsg})
        }
        case ITEM.TYPE.handleDeleteSelectMsg: {     //多选删除

        }
        case ITEM.TYPE.handleAddMsg:{               //添加新item
            console.log("Add new msg")
            let newItem = action.item;
            newItem.icon=state.icons.icon2
            const newMsg = state.messages.slice();
            newMsg.unshift(newItem);
            console.log(newMsg)
            return Object.assign({...state},{messages:newMsg})  
        }
        default:
        {
            console.log("default")
            return state
            
        }
    }
}
const panelControl = (state=initState,action)=>
{
    switch(action.type){
        case ITEM.TYPE.hideAllPanel:{
            return Object.assign({...state},{
                addIsActive:ACTION.HIDE_ALL_PANEL,
                itemPanelIsActive:ACTION.HIDE_ALL_PANEL
                })
        }
        case ITEM.TYPE.showAddPanel:{
            return Object.assign({...state},{addIsActive:ACTION.SHOW_ADD_PANEL})
        }
        case ITEM.TYPE.showItemPanel:{
            console.log("show item ctrl")
            return Object.assign({...state},{itemPanelIsActive:ACTION.SHOW_ITEM_CTRL})
        }
        default:return state;
    }
}

const MainReducers = combineReducers({
    itemControl,panelControl
})
export default MainReducers
