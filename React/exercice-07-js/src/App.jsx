import { useState } from 'react'
import ContactTable from './components/ContactTable'
import ContactForm from './components/ContactForm'
import classes from './App.module.css'

function App() {
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    setContacts(previousContacts => [...previousContacts, contact])
  }

  return (
    <div className={classes.app}>
      <ContactForm onAdd={addContactHandler} />
      <hr />
      <h1>- Contacts -</h1>
      <ContactTable contacts={contacts} />
    </div>
  )
}

export default App
