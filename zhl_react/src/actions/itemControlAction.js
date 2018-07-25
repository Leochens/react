
const handleSetTopMsg = 'handleSetTopMsg';
const handleDeleteMsg = 'handleDeleteMsg';
const handleDeleteSelectMsg='handleDeleteSelectMsg';
const handleAddMsg = 'handleAddMsg';

const toggleAddPanel = 'toggleAddPanel';
const toggleItemPanel = 'toggleItemPanel' 

const setCurentItemId = 'setCurentItemId'

const ChangeText = 'ChangeText'

const actionSetTopMsg=(id)=>{
    return {
        type:handleSetTopMsg,id
    }
}
const actionDeleteMsg=(id)=>{
    return {
        type:handleDeleteMsg,id
    }
}
const actionDeleteSelectMsg=(ids)=>{
    return {
        type:handleDeleteSelectMsg,ids
    }
}
const actionAddMsg=(item)=>{
    return {
        type:handleAddMsg,item
    }
}

const actionToggleItemPanel=()=>{
    return {
        type:toggleItemPanel
    }
}
const actionToggleAddPanel=()=>{
    return {
        type:toggleAddPanel
    }
}

const actionSetCurrentItemId=(cur_id)=>{
    return {
        type:setCurentItemId,cur_id
    }
}
const ITEM={
    TYPE:{
        handleSetTopMsg,
        handleDeleteMsg,
        handleDeleteSelectMsg,
        handleAddMsg,
        toggleAddPanel,
        toggleItemPanel,
        setCurentItemId,


        ChangeText

    },
    ACTION:{
        actionSetTopMsg,
        actionDeleteMsg,
        actionDeleteSelectMsg,
        actionAddMsg,
        actionToggleItemPanel,
        actionToggleAddPanel,
        actionSetCurrentItemId
    }

}


export default ITEM