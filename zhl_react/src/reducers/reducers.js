import { combineReducers } from 'redux'
import ITEM from '../actions/itemControlAction'


import ACTION from '../constants'


const dyh = require('../img/dyh.png')
const icon1 = require('../img/u1.jpg')
const icon2 = require('../img/u2.jpg')
const icon3 = require('../img/u3.jpg')



const initState = {
  icons: {
    dyh,
    icon1,
    icon2,
    icon3,
  },
  messages: [
    {
      icon: dyh,
      title: "订阅号",
      description: "this is a test",
      time: "11:15",
    },
    {
      icon: icon2,
      title: "小王",
      description: "this is a test",
      time: "11:15",
    },
    {
      icon: icon1,
      title: "Leochens",
      description: "this is a test",
      time: "11:15",
    },
    {
      icon: icon2,
      title: "Bob",
      description: "this is a test",
      time: "11:15"
    },
    {
      icon: icon3,
      title: "tee",
      description: "this is a test",
      time: "11:15"
    }
  ],
  addIsActive: ACTION.HIDE_ALL_PANEL,
  itemPanelIsActive: ACTION.HIDE_ALL_PANEL,
  delectDelIsActive: false
}


const itemControl = (state = initState, action) => {
    switch (action.type) {

        case ITEM.TYPE.handleSetTopMsg: {           //置顶

            const {id} = action;
            console.log(id)
            const newMsg = state.messages.slice();
            const item = newMsg.splice(id,1);
            newMsg.unshift(item[0]);
            console.log(newMsg)
            return {messages:newMsg}                //直接覆盖state
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
