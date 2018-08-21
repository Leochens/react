import { TOGGLE_COMPLETE } from '../const'

export const actionToggleComplete = id => {
    return {
        type: TOGGLE_COMPLETE,
        id
    }
}