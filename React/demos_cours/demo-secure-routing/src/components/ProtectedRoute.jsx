import { Navigate } from 'react-router-dom'

const ProtectedRoute = (props) => {

    const testUser = true

    if(testUser){
        return (<>
            {props.children}
        </>)
    }else {
        return <Navigate to={"/auth"}></Navigate>
    }
}

export default ProtectedRoute