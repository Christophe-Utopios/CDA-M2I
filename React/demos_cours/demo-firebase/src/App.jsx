import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignForm from './components/auth/SignForm'
import TaskForm from './components/task/TaskForm'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.auth.user)

  return (
    <>
      {
        user ? 
          <TaskForm user={user} />
          :
          <SignForm />
      }
    </>
  )
}

export default App
