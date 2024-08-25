import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState ={
    todos: [{id:1 , text: "hello World"}]
}

const todoSlice  =createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo : (state, action)=>{
            const newTodo = {
                id : nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo)
        },
        deleteTodo: (state ,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})
export const {addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer