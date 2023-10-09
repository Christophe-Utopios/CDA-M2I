import { useContext, useRef, FormEvent, MutableRefObject } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import Todo from '../models/Todo'

import classes from './TodoForm.module.css'

const TodoForm = () => {
    const { setTodos } = useContext(TodoContext)!

    const nameInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const dueDateInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const submitButtonRef = useRef() as MutableRefObject<HTMLButtonElement>

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        setTodos((prev: Todo[]) => [...prev, new Todo(
            (nameInputRef.current as HTMLInputElement).value,
            new Date((dueDateInputRef.current as HTMLInputElement).value)
        )]);
    }

    const inputChangedHandler = () => {
                submitButtonRef.current.disabled = !nameInputRef.current.value || !dueDateInputRef.current.value || !(Date.parse(dueDateInputRef.current.value) > Date.now())
    }

    return (
        <form action="#" onSubmit={submitHandler} className={classes.todo__form}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" ref={nameInputRef} onChange={inputChangedHandler} required/>
            </div>
            <div>
                <label htmlFor="dueDate">Due date: </label>
                <input type="date" id="dueDate" ref={dueDateInputRef} onChange={inputChangedHandler} required/>
            </div>
            <div>
                <button disabled ref={submitButtonRef}>Add new Todo</button>
            </div>
        </form>
    )
}

export default TodoForm