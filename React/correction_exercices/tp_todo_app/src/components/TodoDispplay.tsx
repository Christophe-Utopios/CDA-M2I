import { useContext, useEffect, useRef, MutableRefObject } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import TodoStatusDisplay from './TodoStatusDisplay'

import classes from './TodoDisplay.module.css'

type TodoDisplayProps = {
    todoId: number
}

const TodoDisplay = (props: TodoDisplayProps) => {
    const { todoId } = props

    const todo = useContext(TodoContext)!.todos.find(t => t.id === todoId)!

    const remainingTimeSpanRef = useRef() as MutableRefObject<HTMLSpanElement>

    useEffect(() => {
        setInterval(() => {
            if (remainingTimeSpanRef.current) {
                const today = new Date()
            
                let remainingSeconds = (todo.dueTime.getTime() - today.getTime()) / (1000)
                
                const remainingDays = Math.floor(remainingSeconds / (3600 * 24))
                remainingSeconds -= remainingDays * (3600 * 24)
        
                const remainingHours = Math.floor(remainingSeconds / 3600)
                remainingSeconds -= remainingHours * 3600
        
                const remainingMinutes = Math.floor(remainingSeconds / 60)
                remainingSeconds -= (remainingMinutes * 60)
        
                remainingSeconds = Math.floor(remainingSeconds)
                
                const formattedTime = `${remainingDays.toString().padStart(3, '0')}:${remainingHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    
                remainingTimeSpanRef.current.textContent = !todo.isDone ? ("Remaining: " + formattedTime) : ''
            }                
        }, 1000)
    }, [todo.dueTime, todo.isDone])

    return (
        <div className={classes.todo__display}>
            <span>Name: {todo.name}</span>
            <TodoStatusDisplay todoId={todoId} />
            <span>Due: {todo.dueTime.toDateString()}</span>
            <span ref={remainingTimeSpanRef}></span>
        </div>
    )
}

export default TodoDisplay