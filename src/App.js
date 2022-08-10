import Input from "./features/input/Input";
import Todos from "./features/todos/Todos";

export default function App() {
    return (
        <div className="container center">
            <h1 className="center title">TODO App</h1>
            <Input />
            <Todos />
        </div>
    );
}
