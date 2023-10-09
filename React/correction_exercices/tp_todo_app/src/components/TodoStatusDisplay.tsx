import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import classes from './TodoStatusDisplay.module.css'

type TodoStatusDisplayProps = {
    todoId: number
}

const TodoStatusDisplay = (props: TodoStatusDisplayProps) => {
    const { todoId } = props

    const { todos, setTodos } = useContext(TodoContext)!

    const todo = todos.find(t => t.id === todoId)!

    const switchTodoStatus = () => {
        todo.switchStatus()
        setTodos(prevTodos => [...prevTodos.sort((a, b) => a.id - b.id)])
    }

    return (

        <button onClick={switchTodoStatus} className={classes.todo__status__display} data-is-done={todo.isDone}>
            {todo.isDone ? 'Done' : 'Remaining'}
        </button>

    )
}

export default TodoStatusDisplay