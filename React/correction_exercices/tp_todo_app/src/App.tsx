import { useState } from 'react'
import Todo from './models/Todo'
import { TodoContext } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoDisplay from './components/TodoDispplay'
import classes from './App.module.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
      <div className={classes.app}>
        <TodoForm />
        <div>
          {todos.map(todo => (
            <TodoDisplay key={todo.id} todoId={todo.id}/>
          ))}
        </div>
      </div>
    </TodoContext.Provider>
  )
}

export default App
