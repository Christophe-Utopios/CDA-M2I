import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'


function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/todos')
        .then(response => {
            setTodos(prev => [...response.data]) 
        })
    },[])



    return (
        <>
        <h1>Todo Liste</h1>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.titre}
                <Link to={`detail/${todo.id}`}> voir le détail </Link>
                </li>
            ))}
        </ul>
        <br></br>
        <Link to="/add">Ajouter une Todo</Link>
        </>
    )

}

export default TodoList