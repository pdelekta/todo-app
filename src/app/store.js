import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import inputReducer from "../features/input/inputSlice";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        input: inputReducer,
    },
});
