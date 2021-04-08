import { useState } from 'react'
import { TodoItem } from './model/TodoItem'
import { AddTodoItem } from './component/AddTodoItem'

function App() {
    const [todos, setTodos] = useState<TodoItem[]>([])

    // Add a todo to the list of todo items
    const addTodo = (todo: TodoItem) => {
        if (todo.name !== '') setTodos([todo, ...todos])
    }

    const removeTodo = (name: string) => {
        setTodos(todos.filter((todo) => todo.name !== name))
    }

    const toggleTodo = (idx: number) => {
        let todos2 = [...todos]
        todos2[idx].done = !todos2[idx].done

        setTodos(todos2)
    }

    return (
        <div style={{ height: '100vh', padding: 20 }}>
            <div style={{ display: 'block', textAlign: 'left', width: '20vh' }}>
                <AddTodoItem fn={addTodo} />
            </div>
            <br />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {todos.map((todo, idx) => {
                    return (
                        <div style={{ display: 'block', textAlign: 'left', marginRight: 10, marginBottom: 10, background: 'lightblue', borderRadius: 10, padding: 10 }}>
                            <b>{todo.name}</b>
                            &nbsp;&nbsp;&nbsp;
                            <span onClick={() => toggleTodo(idx)}>{todo.done ? '✔' : '❌'}</span>
                            &nbsp;&nbsp;&nbsp;
                            <span onClick={() => removeTodo(todo.name)}>🗑</span>
                            <br />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App
