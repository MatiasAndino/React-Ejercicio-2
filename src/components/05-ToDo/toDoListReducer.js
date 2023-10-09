
export const toDoListReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(item => item.id !==action.payload);
        case 'toggle':
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