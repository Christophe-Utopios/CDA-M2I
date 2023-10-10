import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactForm from "./routes/contacts/ContactForm";
import ContactsList from "./routes/contacts/ContactsList";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";

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
        path: "/contacts",
        element: <ContactsList />
      },
      {
        path: "/contacts/add",
        element: <ContactForm />
      },
      {
        path: "/contacts/edit/:contactId",
        element: <ContactForm />
      },
      {
        path: "/contacts/delete/:contactId",
        element: <ContactForm />
      },
    ]
  }
])

export default router