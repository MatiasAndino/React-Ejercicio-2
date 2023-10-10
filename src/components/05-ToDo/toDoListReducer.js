const ACTIONS = {
    ADD:'add',
    DELETE:'delete',
    TOGGLE:'toggle',
}

export const toDoListReducer = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD:
            return [...state, action.payload];
        case ACTIONS.DELETE:
            return state.filter(item => item.id !==action.payload);
        case ACTIONS.TOGGLE:
            return state.map( item => {
                if ( item.id === action.payload ) {
                    return {
                        ...item,
                        done: !item.done,
                    }
                }
                return item;
            });
        default:
            return state;
    }
}