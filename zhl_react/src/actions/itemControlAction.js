import ItemControlPanel from "../components/ItemControlPanel";

const handleSetTopMsg = 'handleSetTopMsg';
const handleDeleteMsg = 'handleDeleteMsg';
const handleDeleteSelectMsg='handleDeleteSelectMsg';

const hideAllPanel = 'hideAllPanel';
const showAddPanel = 'showAddPanel';
const showItemPanel = 'showItemPanel' 

const handleAddMsg = 'handleAddMsg';

const setTopMsg=(id)=>{
    return {
        type:handleSetTopMsg,id
    }
}
const deleteMsg=(id)=>{
    return {
        type:handleDeleteMsg,id
    }
}
const deleteSelectMsg=(ids)=>{
    return {
        type:handleDeleteSelectMsg,ids
    }
}
const addMsg=(item)=>{
    return {
        type:handleAddMsg,item
    }
}
const ITEM={
    TYPE:{
        handleSetTopMsg,
        handleDeleteMsg,
        handleDeleteSelectMsg,
        handleAddMsg,
        hideAllPanel,
        showAddPanel,
        showItemPanel
    },
    ACTION:{
        setTopMsg,
        deleteMsg,
        deleteSelectMsg,
        addMsg
    }

}








export default ITEM