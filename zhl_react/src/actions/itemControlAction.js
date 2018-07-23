import ItemControlPanel from "../components/ItemControlPanel";

const handleSetTopMsg = 'handleSetTopMsg';
const handleDeleteMsg = 'handleDeleteMsg';
const handleDeleteSelectMsg = 'handleDeleteSelectMsg';

const hideAllPanel = 'hideAllPanel';
const showAddPanel = 'showAddPanel';
const showItemPanel = 'showItemPanel'

const handleAddMsg = 'handleAddMsg';

const setTopMsg = (id) => {
    return {
        type: handleSetTopMsg, id
    }
}
const deleteMsg = (id) => {
    return {
        type: handleDeleteMsg, id
    }
}
const deleteSelectMsg = (ids) => {
    return {
        type: handleDeleteSelectMsg, ids
    }
}
const addMsg = (item) => {
    return {
        type: handleAddMsg, item
    }
}
const ITEM = {
    TYPE: {
        handleSetTopMsg,            //置顶
        handleDeleteMsg,            //删除
        handleDeleteSelectMsg,      //多选删除
        handleAddMsg,               //添加新项
        hideAllPanel,               //关闭所有面板
        showAddPanel,               //显示添加页面
        showItemPanel,              //显示更多页面                  
    },
    ACTION: {
        setTopMsg,                  
        deleteMsg,
        deleteSelectMsg,
        addMsg
    }

}








export default ITEM