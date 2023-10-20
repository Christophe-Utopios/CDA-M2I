import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { fetchTodos } from './components/todoItemsSlice'
import TodoForm from './components/TodoForm'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <>
      <TodoForm />
    </>
  )
}

export default App
