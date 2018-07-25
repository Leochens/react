import { combineReducers } from 'redux'
import ITEM from '../actions/itemControlAction'
import initState from '../store'

import ACTION from '../constants'

const itemControl = (state = initState, action) => {
    switch (action.type) {

        case ITEM.TYPE.handleSetTopMsg: {           //置顶
            const id = state.currentItemId;
            console.log('置顶id:' + id)
            const newMsg = state.messages.slice();
            const item = newMsg.splice(id, 1);
            if (!item[0].isTop) {
                item[0].isTop = true;
            }//判断是否已经置顶
            console.log(item[0]);
            newMsg.unshift(item[0]);
            return Object.assign({}, state, {
                messages: newMsg, itemPanelIsActive: !state.itemPanelIsActive
            })
        }
        case ITEM.TYPE.handleDeleteMsg: {           //删除
            const id  = state.currentItemId;
            const newMsg = state.messages.slice();
            newMsg.splice(id, 1);
            return Object.assign({ ...state }, {
                messages: newMsg, itemPanelIsActive: !state.itemPanelIsActive
            })
        }
        case ITEM.TYPE.handleDeleteSelectMsg: {     //多选删除
                return state
        }
        case ITEM.TYPE.handleAddMsg: {               //添加新item
            console.log("Add new msg")
            let newItem = action.item;
            const newMsg = state.messages.slice();

            let insertId = 0;
            for(let i =0;i<newMsg.length;i++)
            {
                if(!newMsg[i].isTop)
                {
                    insertId = i;
                    break;
                }
            }
            console.log('insertId : '+insertId);
            const topItems =  newMsg.splice(0,insertId) 
            console.log(topItems);
            newMsg.unshift(newItem);

            const _newMsgs = topItems.concat(newMsg);
            console.log(newMsg)
            return Object.assign({ ...state }, { messages: _newMsgs , addPanelIsActive: !state.addPanelIsActive})
        }
        case ITEM.TYPE.toggleItemPanel: {
            console.log("ItemCtrl : ", state.itemPanelIsActive);
            return Object.assign({ ...state }, { itemPanelIsActive: !state.itemPanelIsActive })

        }
        case ITEM.TYPE.toggleAddPanel: {
            console.log("AddCtrl : ", state.addPanelIsActive);
            return Object.assign({ ...state }, { addPanelIsActive: !state.addPanelIsActive })

        }
        case ITEM.TYPE.setCurentItemId: {
            console.log("Set Cur id : " + action.cur_id);
            return Object.assign({ ...state }, { currentItemId: action.cur_id })
        }

        case ITEM.TYPE.ChangeText:{

            const {str} =action;
            return Object.assign({...state},{
                testStr:str
            })

        }
        default:
            {
                console.log("default")
                return state

            }
    }
}
const panelControl = (state = initState, action) => {
    switch (action.type) {
        case ITEM.TYPE.hideAllPanel: {
            return Object.assign({ ...state }, {
                addIsActive: ACTION.HIDE_ALL_PANEL,
                itemPanelIsActive: ACTION.HIDE_ALL_PANEL
            })
        }
        case ITEM.TYPE.showAddPanel: {
            return Object.assign({ ...state }, { addIsActive: ACTION.SHOW_ADD_PANEL })
        }
        case ITEM.TYPE.showItemPanel: {
            console.log("show item ctrl")
            return Object.assign({ ...state }, { itemPanelIsActive: ACTION.SHOW_ITEM_CTRL })
        }
        default: return state;
    }
}

const MainReducers = combineReducers({
    itemControl, panelControl
})
export default MainReducers
