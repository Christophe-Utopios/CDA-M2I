import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const user = useSelector(state => state.auth.user)
    
    if(user) {
        return(
            <>
            {props.children}
            </>
        )
    } else {
        return <Navigate to={"/sign"}></Navigate>
    }
}
 
export default ProtectedRoute;