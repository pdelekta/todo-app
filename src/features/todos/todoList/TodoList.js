import Todo from "./todo/Todo";
export default function TodoList({ label, todos }) {
    return (
        <>
            <span className="counter">
                {label}
                <span> - {todos.length}</span>
            </span>
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        checked={todo.checked}
                    />
                ))}
            </ul>
        </>
    );
}
