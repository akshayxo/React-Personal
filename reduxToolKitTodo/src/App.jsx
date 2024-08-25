import { useState } from 'react'
import './App.css'
import TodoForm from './components/todoForm'
import TodoItems from './components/todoItems'

function App() {


  return (
    <>
      <TodoForm />
      <TodoItems />
    </>
  )
}

export default App
