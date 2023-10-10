import { useContext, useRef } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import ContactContext from "./ContactContext"

const ContactForm = () => {
  const { contactId } = useParams()

  const contact = useContext(ContactContext).contacts.find(c => c.id === contactId)
  const { setContacts } = useContext(ContactContext)


  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode') ?? 'add'

  const navigate = useNavigate()

  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()

  const submitFormHandler = (e) => {
    e.preventDefault()

    if (mode === 'delete') {
      setContacts((prev) => prev.filter(contact => contact.id !== contactId));

    } else if (mode === 'edit') {
      const updatedContact = {
        id: contactId,
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value
      };

      setContacts((prev) =>
        prev.map((contact) =>
          contact.id === contactId ? updatedContact : contact
        )
      );

    } else {
      const id = new Date().getTime().toString()
      const firstname = firstnameRef.current.value
      const lastname = lastnameRef.current.value
      const email = emailRef.current.value
      const phone = phoneRef.current.value

      const contactValues = {
        id,
        firstname,
        lastname,
        email,
        phone
      }
      setContacts((prev) => [...prev, contactValues]);
    }

    navigate(`/contacts`)
  }

  return (
    <>
      <h3>{mode.substring(0, 1).toUpperCase() + mode.substring(1).toLowerCase()} Contact</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">Prénom: </label>
          <input type="text" required={mode !== 'delete'} disabled={mode === 'delete'} ref={firstnameRef} defaultValue={contact?.firstname} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Nom: </label>
          <input type="text" required={mode !== 'delete'} disabled={mode === 'delete'} ref={lastnameRef} defaultValue={contact?.lastname} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: </label>
          <input type="email" required={mode !== 'delete'} disabled={mode === 'delete'} ref={emailRef} defaultValue={contact?.email} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Numéro de téléphone: </label>
          <input type="text" required={mode !== 'delete'} disabled={mode === 'delete'} ref={phoneRef} defaultValue={contact?.phone} className="form-control" />
        </div>
        <hr />
        <div className="text-end">
          <button className={`btn btn-${mode === 'delete' ? 'danger' : mode === 'edit' ? 'warning' : 'success'}`}>
            <i className={`bi bi-${mode === 'delete' ? 'trash' : mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i> {mode === 'delete' ? 'Confirmer' : mode === 'edit' ? 'Editer' : 'Ajouter'}
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactForm