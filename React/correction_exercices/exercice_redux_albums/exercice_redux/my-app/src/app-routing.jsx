import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignForm from "./components/auth/SignForm"
import AlbumList from "./components/album/AlbumList";
import ALbumForm from "./components/album/AlbumForm";
import ProtectedRoute from "./components/shared/ProtectedRoute";


const router = createBrowserRouter([
    {
        path :"/",
        element : <App />,
        children: [
            {
                path: "/",
                element: <AlbumList />
            },
            {
                path :"/add",
                element : <ProtectedRoute><ALbumForm /></ProtectedRoute>
            },
            {
                path: "/sign",
                element: <SignForm />
            },
            {
                path: "/edit/:id",
                element: <ProtectedRoute><ALbumForm /></ProtectedRoute>
            }
        ]
    },
])

export default router