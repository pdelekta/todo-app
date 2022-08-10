import { createSlice } from "@reduxjs/toolkit";

const initialInput = { value: "", error: "" };

export const inputSlice = createSlice({
    name: "input",
    initialState: initialInput,
    reducers: {
        setInput: (state, action) => {
            state.value = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        removeError: (state, action) => {
            state.error = "";
        },
    },
});

export default inputSlice.reducer;

// Action creators

export const { setInput, setError, removeError } = inputSlice.actions;

// Selectors

export const selectInputValue = state => state.input.value;

export const selectError = state => state.input.error;
