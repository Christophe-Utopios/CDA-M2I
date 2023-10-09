import { useRef } from "react"

const ContactMePage = () => {
  const senderMailRef = useRef()
  const subjectRef = useRef()
  const messageBodyRef = useRef()

  const submitFormHandler = (e) => {
    e.preventDefault()

    const senderMail = senderMailRef.current.value
    const subject = subjectRef.current.value
    const messageBody = messageBodyRef.current.value

    senderMailRef.current.value = ""
    subjectRef.current.value = ""
    messageBodyRef.current.value = ""

    const formValues = {
      senderMail,
      subject,
      messageBody
    }

    console.log(formValues)
  }

  return (
    <>
      <h3>Contact me</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
        <div className="mb-3">
          <label htmlFor="senderMail" className="form-label">Votre mail: </label>
          <input type="email" id="senderMail" required ref={senderMailRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Sujet: </label>
          <select id="subject" required ref={subjectRef} className="form-select">
            <option value="">Sélectionnez une option</option>
            <option value="billing">Paiement</option>
            <option value="account">Compte</option>
            <option value="technical-issue">Technique</option>
            <option value="other">Autre</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="messageBody" className="form-label">Message: </label>
          <textarea id="messageBody" required ref={messageBodyRef} className="form-control" cols={30} rows={10} style={{resize: "none"}}></textarea>
        </div>
        <div className="text-end">
          <button className="btn btn-outline-light">
            <i className="bi bi-send"></i> Envoyer
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactMePage