import ActionTypes from '../../const';


const satisfied = (state = {}, action) => {
    const { res } = action;

    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FETCH_SATISFIED_LIST}_SUC`: {
            return {
                ...state,
                ...res.entities.satisfied
            }
        }
        case `${ActionTypes.TABLE_ACTIONS.TOGGLE_REPLY}`: { //处理回复
            const { time } = action;
            return {
                ...state,
                [time]: {
                    ...state[time],
                    reply_status: !state[time].reply_status
                }
            }
        }
        default: return state;
    }
}
export default satisfied;