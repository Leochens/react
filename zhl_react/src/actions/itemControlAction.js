
const handleSetTopMsg = 'handleSetTopMsg';
const handleCancelSetTopMsg = 'handleCancelSetTopMsg'

const handleDeleteMsg = 'handleDeleteMsg';
const handleDeleteSelectMsg = 'handleDeleteSelectMsg';
const handleAddMsg = 'handleAddMsg';

const toggleAddPanel = 'toggleAddPanel';
const toggleItemPanel = 'toggleItemPanel'

const setCurrentItem = 'setCurrentItem'

const actionSetTopMsg = (id) => {
    return {
        type: handleSetTopMsg, id
    }
}
const actionCancelSetTopMsg = () => {
    return {
        type: handleCancelSetTopMsg
    }
}
const actionDeleteMsg = (id) => {
    return {
        type: handleDeleteMsg, id
    }
}
const actionDeleteSelectMsg = (ids) => {
    return {
        type: handleDeleteSelectMsg, ids
    }
}
const actionAddMsg = (item) => {
    return {
        type: handleAddMsg, item
    }
}

const actionToggleItemPanel = () => {
    return {
        type: toggleItemPanel
    }
}
const actionToggleAddPanel = () => {
    return {
        type: toggleAddPanel
    }
}

const actionSetCurrentItem = (currentItem) => {
    return {
        type: setCurrentItem, currentItem
    }
}
const ITEM = {
    TYPE: {
        handleSetTopMsg,
        handleCancelSetTopMsg,
        handleDeleteMsg,
        handleDeleteSelectMsg,
        handleAddMsg,
        toggleAddPanel,
        toggleItemPanel,
        setCurrentItem,



    },
    ACTION: {
        actionSetTopMsg,
        actionCancelSetTopMsg,
        actionDeleteMsg,
        actionDeleteSelectMsg,
        actionAddMsg,
        actionToggleItemPanel,
        actionToggleAddPanel,
        actionSetCurrentItem
    }

}


export default ITEM