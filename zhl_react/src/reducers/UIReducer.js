import { TOGGLE_ADD_PANEL, TOGGLE_ITEM_PANEL, TOGGLE_MULTI_DEL_BUTTON } from '../const/ActionTypes'
import INIT_STATE from './INIT_STATE'

const UIReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_PANEL: {
            return Object.assign({ ...state },
                { itemPanelIsActive: !state.itemPanelIsActive })

        }
        case TOGGLE_ADD_PANEL: {
            return Object.assign({ ...state },
                { addPanelIsActive: !state.addPanelIsActive })

        }
        case TOGGLE_MULTI_DEL_BUTTON: {
            return Object.assign({ ...state },
                { multiDeleteIsActive: !state.multiDeleteIsActive })
        }
        default: return state
    }
}
export default UIReducer;
