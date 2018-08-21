import ACTION_TYPES from '../const';


export const actionToggleDynamicEdit = (id) => {
    // debugger
    return {
        type: ACTION_TYPES.INPUT_ACTIONS.TOGGLE_DYNAMIC_EDIT,
        id
    }
}
export const actionChangeDynamicData = (item_id, newContent) => {
    return {
        type: ACTION_TYPES.INPUT_ACTIONS.CHANGE_DYNAMIC_DATA,
        item_id,
        newContent
    }
}


