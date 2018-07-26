import {
    SET_TOP_MSG,
    CANCEL_SET_TOP_MSG,
    DEL_MSG,
    DEL_SELECT_MSG,
    ADD_MSG,
    SET_CURRENT_ITEM,
    ADD_TO_DELETE_QUEUE,
    DEL_FROM_DELETE_QUEUE
} from '../const/ActionTypes';

import INIT_STATE from './INIT_STATE'

const Messagereducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case SET_TOP_MSG: {           //置顶
            const id = state.currentItem.id;

            const newMsg = [...state.messages];
            const item = newMsg.splice(id, 1).pop();
            if (!item.isTop) {
                item.isTop = true;
            }//判断是否已经置顶

            newMsg.unshift(item);
            return Object.assign({}, state, {
                messages: newMsg
            })
        }
        case CANCEL_SET_TOP_MSG: {
            const newMsg = [...state.messages];
            const item_id = state.currentItem.id;
            const item_down = newMsg.splice(item_id, 1).pop();
            item_down.isTop = false;
            newMsg.push(item_down);
            return Object.assign({ ...state }, {
                messages: newMsg
            })
        }
        case DEL_MSG: {           //删除
            const id = state.currentItem.id;
            const newMsg = state.messages.slice();
            newMsg.splice(id, 1);
            return Object.assign({ ...state }, {
                messages: newMsg
            })
        }
        case DEL_SELECT_MSG: {     //多选删除

            const { deleteQueue } = state;
            const messages = [...state.messages];
            deleteQueue.sort((it1, it2) => {
                return it1 < it2;
            });     //倒序排序

            deleteQueue.map((id) => {
                messages.splice(id, 1)
            });
            return Object.assign({}, { ...state }, {
                messages,
                deleteQueue: []
            });

        }
        case ADD_MSG: {               //添加新item
            let newItem = action.item;
            const newMsg = [...state.messages];

            let insertId = 0;
            let cnt = 0;
            for (cnt = 0; cnt < newMsg.length; cnt++) {
                if (!newMsg[cnt].isTop) {
                    insertId = cnt;
                    break;
                }
            }
            if (cnt === newMsg.length)       // 检测都是置顶的情况
            {
                newMsg.push(newItem);
                return Object.assign({}, { ...state }, { messages: newMsg });
            }
            const topItems = newMsg.splice(0, insertId)
            newMsg.unshift(newItem);

            const _newMsgs = topItems.concat(newMsg);
            console.log(state);
            return Object.assign({ ...state }, { messages: _newMsgs })
        }
        case SET_CURRENT_ITEM: {
            return Object.assign({ ...state }, { currentItem: action.currentItem })
        }
        case ADD_TO_DELETE_QUEUE: {
            const id = action.id;
            const { deleteQueue } = state;
            // console.log('add to del queue');
            if (deleteQueue.includes(id)) {
                return state;
            }
            deleteQueue.push(id);
            return Object.assign({}, { ...state }, {
                deleteQueue
            })

        }
        case DEL_FROM_DELETE_QUEUE: {
            console.log('del queue : wertwt4');
            const id = action.id;
            const { deleteQueue } = state;

            let splice_id = null;
            for (let i = 0; i < deleteQueue.length; i++) {
                if (deleteQueue[i] === id) {
                    splice_id = i;      //找到起始点
                    break;
                }
            }
            deleteQueue.splice(splice_id, 1);        //删除所选的id
            return Object.assign({}, { ...state }, {
                deleteQueue
            })
        }
        default: return state
    }
}
export default Messagereducer;