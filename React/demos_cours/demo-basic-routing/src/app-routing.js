import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorPage from "./routes/ErrorPage"
import Form from "./routes/Form"
import Menu from "./routes/Menu"


const router = createBrowserRouter([
    {path :"/",
    element : <Menu />,
    errorElement : <ErrorPage/>,
    children: [
        {
            path :"/",
            element : <App/>
        },
        {
            path :"/form",
            element : <Form/>
        }
    ]},
    // {path :"/form",
    // element : <Form />,
    // errorElement : <ErrorPage/> }
])


export default router