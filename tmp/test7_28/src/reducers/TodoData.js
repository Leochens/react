import { TOGGLE_COMPLETE } from '../const'
const initState = {
    list: [
        {
            id: '0',
            content: "hello0",
            isCompleted: false
        },
        {
            id: '1',
            content: "hello1",
            isCompleted: false
        },
        {
            id: '2',
            content: "hello2",
            isCompleted: false
        },
        {
            id: '3',
            content: "hello3",
            isCompleted: false
        },
        {
            id: '4',
            content: "hello4",
            isCompleted: false
        },
    ]
}


const TodoDataReducer = (state = initState, action) => {

    switch (action.type) {

        case TOGGLE_COMPLETE: {
            const { id } = action;
            const list = [...state.list];
            console.log(state.list[id].isCompleted);
            list[id].isCompleted = !state.list[id].isCompleted;
            return Object.assign({},state,{
                list
            })
        }

        default: return state;
    }

}


export default TodoDataReducer;