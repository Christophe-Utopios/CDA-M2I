import { useRef } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../auth/authSlice";
import { BASE_DB_URL } from "../../fireBaseConfig";
import { addTask } from "./taskSlice";

const TaskForm = (props) => {
    const textRef = useRef()
    const user = props.user
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newTask = {
            id: Date.now(),
            text: textRef.current.value,
            done: false
        }

        if(user.idToken) {
            try {
                const response = await fetch(`${BASE_DB_URL}/todoList.json?auth=${user.idToken}`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(newTask)
                })

                if(!response.ok){
                    throw new Error("Something went wrong during the POST request !")
                }

                const data = await response.json()

                console.log(data);
                dispatch(addTask(newTask))
            } catch(error) {
                console.error(error.message);
            }
        }
    }

    return (  
        <>
            <button onClick={() => dispatch(removeUser())}>Déconexion</button>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ajouter une tâche" ref={textRef}/>
            </form>
        </>
    );
}
 
export default TaskForm;