import { toggleChecked, removeTodo } from "../../todosSlice";
import { useDispatch } from "react-redux";

export default function Todo({ id, name, checked }) {
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleChecked(id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(id));
    };

    return (
        <li className="todo-container">
            <input
                type="checkbox"
                className="todo-checkbox"
                checked={checked}
                id={id}
                onChange={handleChange}
            />
            <label className="todo-text" htmlFor={id}>
                <span className="todo-text__inner">{name}</span>
            </label>
            <span className="todo-delete" onClick={handleRemove}>
                ×
            </span>
        </li>
    );
}
