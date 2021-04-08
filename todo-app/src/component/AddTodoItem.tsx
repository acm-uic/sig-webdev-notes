import React, { useState } from 'react'
import { TodoItem } from '../model/TodoItem'

export const AddTodoItem: React.FC<{ fn: (todo: TodoItem) => void }> = ({ fn }) => {
    const [todo, setTodo] = useState('')

    const handleInput: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            fn({ name: todo, done: false })
            setTodo('')
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTodo(event.target.value)
    }

    return (
        <>
            <input style={{ padding: 10 }} type="text" value={todo} onChange={handleChange} onKeyPress={handleInput} />
        </>
    )
}
