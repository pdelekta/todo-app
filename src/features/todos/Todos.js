import TodoList from "./todoList/TodoList";
import { useSelector } from "react-redux/es/exports";
import { selectCheckedTodos, selectUncheckedTodos } from "./todosSlice";
export default function Todos() {
    const unCheckedTodos = useSelector(selectUncheckedTodos);
    const checkedTodos = useSelector(selectCheckedTodos);
    return (
        <div id="all-todo-container">
            {unCheckedTodos.length > 0 && (
                <TodoList label="To do" todos={unCheckedTodos} />
            )}
            {checkedTodos.length > 0 && (
                <TodoList label="Completed" todos={checkedTodos} />
            )}
        </div>
    );
}
