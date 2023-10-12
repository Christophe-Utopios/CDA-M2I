import axios from "axios";
import { useEffect, useRef } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"


function AddTodo() {
    const inputTitreTodo = useRef();
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const id = params.get("id") ?? null



    useEffect(() => {
        if(id != null){
            axios.get(`http://localhost:5000/todos/${id}`)
            .then((response => {
                inputTitreTodo.current.value = response.data.titre
            })
            )
        }
    },[id])
    

    const handleSubmit = () => {
        if(id != null){
            axios.put(`http://localhost:5000/todos/${id}`,{ titre : inputTitreTodo.current.value })
            .then(response => {
                console.log(response.data)
                navigate("/")
            })
        }else{
            axios.post('http://localhost:5000/todos',{ titre : inputTitreTodo.current.value })
            .then(response => {
                console.log(response.data)
                navigate("/")
            })
        }
    }


    return (
        <>
        <h1>Ajout Todo</h1>
        <input placeholder="Titre todo" ref={inputTitreTodo}></input>
        <button onClick={handleSubmit}>{id ? "Modifier todo" : "Ajout Todo"}</button>
        <br></br>
        <Link to="/">Home</Link>
    
        </>
    )

}

export default AddTodo