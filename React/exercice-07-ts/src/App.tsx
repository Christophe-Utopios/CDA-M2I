import { useState } from 'react'
import ContactTable from './components/ContactTable'
import Contact from './models/Contact'
import ContactForm from './components/ContactForm'

function App() {
  const [contacts, setContacts] = useState<Contact[]>([])

  const addContactHandler = (contact: Contact) => {
    setContacts(previousContacts => [...previousContacts, contact])
  }

  return (
    <>
      <ContactForm onAdd={addContactHandler} />
      <hr />
      <ContactTable contacts={contacts} />
    </>
  )
}

export default App
