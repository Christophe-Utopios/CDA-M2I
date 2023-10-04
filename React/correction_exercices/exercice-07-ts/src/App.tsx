import { useState } from 'react'
import ContactTable from './components/ContactTable'
import Contact from './models/Contact'
import ContactForm from './components/ContactForm'
import classes from './App.module.css'

function App() {
  const [contacts, setContacts] = useState<Contact[]>([])

  const addContactHandler = (contact: Contact) => {
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
