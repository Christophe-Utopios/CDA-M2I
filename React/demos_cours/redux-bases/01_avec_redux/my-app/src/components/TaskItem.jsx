import { useDispatch } from "react-redux";
import { deleteTask } from "./TaskSlice";

const TaskItem = (props) => {
    const task = props.task
    const dispatch = useDispatch()

    return ( 
        <>
        <div>
            <span>{task.text} - {task.done ? "Terminée" : "A faire"}</span>
        </div>
        <button onClick={() => dispatch(deleteTask(task.id))} >Supprimer</button>
        </>
     );
}

export default TaskItem;