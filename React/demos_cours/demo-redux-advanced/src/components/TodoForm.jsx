import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "./todoItemsSlice";

const TodoForm = () => {
    const dispatch = useDispatch()
    const titleRef = useRef()

    const addTodo = (event) => {
        event.preventDefault()

        const newTodo = {
            text: titleRef.current.value,
            done: false
        }

        dispatch(postTodo(newTodo))
    }
    return (  
        <>
            <input type="text" ref={titleRef}/>
            <button onClick={addTodo}>Ajouter</button>
        </>
    );
}
 
export default TodoForm;
