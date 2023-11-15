import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
        console.log('flag');
        setTodoId(todoId + 1);
    }

    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>Loading: {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={prevTodo}>
                Prev todo
            </button>
            <button onClick={nextTodo}>
                Next todo
            </button>

            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo}>
                            <strong>{todo.completed ? 'Done ' : 'Pending '}</strong> 
                             {todo.title}
                        </li>
                    ))
                }
            </ul> */}
        </>
    )
}
