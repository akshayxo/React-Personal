import React , { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoContextProvider =({children}) =>{
    const [displayTodos, setDisplayTodos] = useState([]);
    return(
        <TodoContext.Provider value={{displayTodos, setDisplayTodos}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;

export const useTodo =()=>{
    return useContext(TodoContext);
}

