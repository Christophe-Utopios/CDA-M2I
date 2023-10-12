import { createBrowserRouter, redirect } from "react-router-dom";
import App from './App'
import Form from "./components/Form";
import ProtectedRoute from "./components/ProtectedRoute";
import Compte from "./components/Compte";


const authCheck = (role) => {
    if(role === "Admin"){
        return true
    }else {
        return redirect("/auth")
    }
}


const router = createBrowserRouter([
    {
        path: "/",
        element : <App />,
    },
    {
        path: "/auth",
        element : <Form />,
    },
    {
        path: "/compte",
        element : <ProtectedRoute><Compte/></ProtectedRoute>,
    },
    {
        path: "/compte2",
        element : <Compte/>,
        loader : () => authCheck("Admin")
    }
])

export default router;