import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [];
export const todosSlice = createSlice({
    name: "todos",
    initialState: initialTodos,
    reducers: {
        addTodo: (state, action) => [...state, action.payload],
        removeTodo: (state, action) =>
            state.filter(todo => todo.id !== action.payload),
        toggleChecked: (state, action) => {
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, checked: !todo.checked }
                    : todo
            );
        },
    },
});
export default todosSlice.reducer;

// Action creators

export const { addTodo, removeTodo, toggleChecked } = todosSlice.actions;

// Selectors

export const selectUncheckedTodos = state => {
    return state.todos.filter(todo => !todo.checked);
};

export const selectCheckedTodos = state => {
    return state.todos.filter(todo => todo.checked);
};
