import { combineReducers } from 'redux'
import { SET_TOP_MSG, CANCEL_SET_TOP_MSG, DEL_MSG, DEL_SELECT_MSG, ADD_MSG, TOGGLE_ADD_PANEL, TOGGLE_ITEM_PANEL, SET_CURRENT_ITEM } from '../const/ActionTypes'
import INIT_STATE from './INIT_STATE'

const itemControl = (state = INIT_STATE, action) => {
    switch (action.type) {

        case SET_TOP_MSG: {           //置顶
            const id = state.currentItem.id;

            const newMsg = [...state.messages];
            const item = newMsg.splice(id, 1);
            if (!item[0].isTop) {
                item[0].isTop = true;
            }//判断是否已经置顶

            newMsg.unshift(item[0]);
            return Object.assign({}, state, {
                messages: newMsg, itemPanelIsActive: !state.itemPanelIsActive
            })
        }
        case CANCEL_SET_TOP_MSG: {
            const newMsg = [...state.messages];
            const item_id = state.currentItem.id;
            const item_down = newMsg.splice(item_id, 1);
            item_down[0].isTop = false;
            newMsg.push(item_down[0]);
            return Object.assign({ ...state }, {
                messages: newMsg, itemPanelIsActive: !state.itemPanelIsActive
            })
        }
        case DEL_MSG: {           //删除
            const id = state.currentItem.id;
            const newMsg = state.messages.slice();
            newMsg.splice(id, 1);
            return Object.assign({ ...state }, {
                messages: newMsg, itemPanelIsActive: !state.itemPanelIsActive
            })
        }
        case DEL_SELECT_MSG: {     //多选删除
            return state
        }
        case ADD_MSG: {               //添加新item
            let newItem = action.item;
            const newMsg = [...state.messages];

            let insertId = 0;
            for (let i = 0; i < newMsg.length; i++) {
                if (!newMsg[i].isTop) {
                    insertId = i;
                    break;
                }
            }
            const topItems = newMsg.splice(0, insertId)
            newMsg.unshift(newItem);

            const _newMsgs = topItems.concat(newMsg);
            return Object.assign({ ...state }, { messages: _newMsgs, addPanelIsActive: !state.addPanelIsActive })
        }
        case TOGGLE_ITEM_PANEL: {
            return Object.assign({ ...state }, { itemPanelIsActive: !state.itemPanelIsActive })

        }
        case TOGGLE_ADD_PANEL: {
            return Object.assign({ ...state }, { addPanelIsActive: !state.addPanelIsActive })

        }
        case SET_CURRENT_ITEM: {
            return Object.assign({ ...state }, { currentItem: action.currentItem })
        }
        default: return state
    }
}


const MainReducers = combineReducers({
    itemControl
})
export default MainReducers
