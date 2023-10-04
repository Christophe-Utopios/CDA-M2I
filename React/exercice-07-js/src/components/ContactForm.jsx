import { useState, useEffect } from 'react'
import Form from "./shared/Form"
import Contact from '../models/Contact'
import classes from './ContactForm.module.css'

const ContactForm = (props) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [canSubmit, setCanSubmit] = useState(false)

    const onInputChanged = (event, inputId) => {
        switch (inputId) {
            case 'firstname':
                setFirstname(event.target.value)
            break;
            case 'lastname':
                setLastname(event.target.value)
            break;
            case 'birthDate':
                setBirthDate(event.target.value)
            break;
        }
    }

    useEffect(() => {
        setCanSubmit(!!firstname && !!lastname && !!birthDate)
    }, [firstname, lastname, birthDate])

    const onSubmitHandler = () => {
        props.onAdd(new Contact(firstname, lastname, birthDate))
        setFirstname("")
        setLastname("")
        setBirthDate("")
    }

    return (
        <Form onSubmit={onSubmitHandler} className={classes.contactForm}>
            <div>
                <label htmlFor="firstname">Firstname:</label>
                <input type="text" value={firstname} onInput={(e) => onInputChanged(e, 'firstname')} required />
            </div>
            <div>
                <label htmlFor="lastname">Lastname:</label>
                <input type="text" value={lastname} onInput={(e) => onInputChanged(e, 'lastname')} required />
            </div>
            <div>
                <label htmlFor="birthDate">Birth date:</label>
                <input type="date" value={birthDate} onInput={(e) => onInputChanged(e, 'birthDate')} required />
            </div>
            <div>
                <button disabled={!canSubmit}>Add a Contact</button>
            </div>
        </Form>
    )
}

export default ContactForm