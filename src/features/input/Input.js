import { useSelector, useDispatch } from "react-redux/es/exports";
import {
    setInput,
    selectInputValue,
    selectError,
    setError,
    removeError,
} from "./inputSlice";
import { addTodo } from "../todos/todosSlice";
import { v4 as uuid } from "uuid";
export default function Input() {
    const inputValue = useSelector(selectInputValue);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    const handleChange = event => {
        dispatch(setInput(event.target.value));
    };
    const handleSubmit = event => {
        event.preventDefault();
        if (inputValue.match(/^\s+$/) !== null || !inputValue) {
            dispatch(setError("You can't add empty todo."));
            return;
        }
        dispatch(removeError());
        dispatch(
            addTodo({
                id: uuid(),
                name: inputValue,
                checked: false,
            })
        );
        dispatch(setInput(""));
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <label htmlFor="add-task-button" className="button-container">
                <button className="button__icon">+</button>
                <input
                    id="add-task-button"
                    placeholder="Add new task"
                    type="text"
                    className="button center"
                    onChange={handleChange}
                    value={inputValue || ""}
                    autoComplete="off"
                ></input>
            </label>
            {error && (
                <span className="error">You can't add an empty todo.</span>
            )}
        </form>
    );
}
