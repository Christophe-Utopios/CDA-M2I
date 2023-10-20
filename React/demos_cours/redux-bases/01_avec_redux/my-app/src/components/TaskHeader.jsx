import { useSelector } from "react-redux";
import TaskForm from "./TaskForm";

const TaskHeader = () => {
    const counter = useSelector(state => state.task.counterTask)

    return (  
        <header>
            <h1>React Todo list :</h1>
            <p>
                Tâches à faire : <strong>{counter}</strong>
            </p>
            <TaskForm />
        </header>
    );
}
 
export default TaskHeader;