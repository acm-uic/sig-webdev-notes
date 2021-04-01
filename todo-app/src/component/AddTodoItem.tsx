import React, { useState } from 'react'
import { TodoItem } from '../model/TodoItem'

export const AddTodoItem: React.FC<{ fn: (todo: TodoItem) => void }> = ({ fn }) => {
    const [todo, setTodo] = useState('')

    return (
        <>
            <input
                type="text"
                value={todo}
                onChange={(event: any) => {
                    setTodo(event.target.value)
                }}
            />
            <button onClick={() => fn({ name: todo, done: false })}>Add Todo</button>
        </>
    )
}
