import { combineReducers } from 'redux'
import ITEM from '../actions/itemControlAction'
import initState from '../store'

const itemControl = (state = initState, action) => {
    switch (action.type) {

        case ITEM.TYPE.handleSetTopMsg: {           //置顶
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
        case ITEM.TYPE.handleCancelSetTopMsg: {
            const newMsg = [...state.messages];
            const item_id = state.currentItem.id;
            const item_down = newMsg.splice(item_id, 1);
            item_down[0].isTop = false;
            newMsg.push(item_down[0]);
            return Object.assign({ ...state }, {
                messages: newMsg, itemPanelIsActive: !state.itemPanelIsActive
            })
        }
        case ITEM.TYPE.handleDeleteMsg: {           //删除
            const id = state.currentItem.id;
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
        case ITEM.TYPE.toggleItemPanel: {
            return Object.assign({ ...state }, { itemPanelIsActive: !state.itemPanelIsActive })

        }
        case ITEM.TYPE.toggleAddPanel: {
            return Object.assign({ ...state }, { addPanelIsActive: !state.addPanelIsActive })

        }
        case ITEM.TYPE.setCurrentItem: {
            return Object.assign({ ...state }, { currentItem: action.currentItem })
        }

        case ITEM.TYPE.ChangeText: {

            const { str } = action;
            return Object.assign({ ...state }, {
                testStr: str
            })

        }
        default: return state
    }
}


const MainReducers = combineReducers({
    itemControl
})
export default MainReducers
