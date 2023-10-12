import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"

function TodoDetail() {
    const { id } = useParams();
    const [todo, setTodo] = useState(null)
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:5000/todos/${id}`)
        .then(response => {
            setTodo(response.data) 
        })
    },[id])

    const deleteTodo = () => {
        axios.delete(`http://localhost:5000/todos/${id}`)
        .then(() => {
          console.log("personne avec id "+id+" supprimer")
          navigate("/")
        })
      
      }

    const modifTodo = () => {
        navigate(`/add?id=${id}`)
    }


    if(!todo){
        return <p>Chargement...</p>
    }

    return (
        <>
        <h1>detail todo</h1>
        <p>{todo.titre}</p>
        <button onClick={deleteTodo}>Supprimer</button>
        <button onClick={modifTodo}>Modifier</button>
        <br></br>
        <Link to="/">Home</Link>
        </>
    )

}

export default TodoDetail