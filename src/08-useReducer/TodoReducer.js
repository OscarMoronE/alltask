export const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...state, action.payload]

        case '[TODO] Remove Todo':
            return state.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            )

        case '[TODO] Update Todo':
            return state.map(todo =>
                (todo.id === action.payload.id)
                    ? { ...todo, description: action.payload.newDescription }
                    : todo
            );

        default:
            return state;
    }
}