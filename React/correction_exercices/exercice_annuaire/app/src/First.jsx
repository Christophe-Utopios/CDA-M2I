import { RouterProvider } from 'react-router-dom';
import router from './app-routing';
import ContactContext from './routes/contacts/ContactContext';
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState([])
 


  return (
    <ContactContext.Provider value={{contacts, setContacts}}>
      <RouterProvider router={router} />
      </ContactContext.Provider>
  );
}

export default App;
