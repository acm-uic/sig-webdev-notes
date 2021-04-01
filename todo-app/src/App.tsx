import { useState } from 'react'
import { TodoItem } from './model/TodoItem'
import { AddTodoItem } from './component/AddTodoItem'

function App() {
    const [todos, setTodos] = useState<TodoItem[]>([])

    const addTodo = (todo: TodoItem) => setTodos([todo, ...todos])

    return (
        <>
            Our todos right now: {JSON.stringify(todos)}
            <br />
            <AddTodoItem fn={addTodo} />
        </>
    )
}

export default App
