import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./routes/ErrorPage"
import HomePage from "./routes/HomePage"
import ProjectsPage from "./routes/ProjectsPage"
import ContactMePage from "./routes/ContactMePage"
import AboutPage from "./routes/AboutPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      },
      {
        path: "/contact",
        element: <ContactMePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
    ]
  }
])

export default router