import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContextProvider';

function TodoForm() {
    const [todo, setTodo] = useState('');
    const {displayTodos, setDisplayTodos} = useTodo();

    const onsubmit = (e) => {
        e.preventDefault();
        setDisplayTodos((prev) =>{
            return [
                ...prev,
                {
                    id: prev.length + 1,
                    msg: todo,
                    completed: false
                }
            ]
        })
    }
  return (
    <form onSubmit={onsubmit} className="flex">
        <input
            type="text"
            placeholder="Write Todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>

  )
}

export default TodoForm

