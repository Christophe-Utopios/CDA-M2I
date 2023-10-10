import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Project from "./routes/Project";
import ErrorPage from "./routes/ErrorPage";


const router = createBrowserRouter([
    {
        path :"/",
        element : <App />,
        errorElement : <ErrorPage />
    },
    {
        path :"/projects/:monparams",
        element : <Project />,
        errorElement : <ErrorPage />
    }
])

export default router