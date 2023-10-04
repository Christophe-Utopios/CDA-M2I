import classes from './ContactTable.module.css'

const ContactTable = (props) => {
    const { contacts } = props
    
    if (contacts && contacts.length > 0) {
        return (
            <table className={classes.contactTableComponent}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Date de naissance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.firstname}</td>
                            <td>{contact.lastname}</td>
                            <td>{contact.birthdate}</td>
                            <td>N/A</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    } else {
        return (
            <p>
                Il n'y a pas de contacts dans la base de données !
            </p>
        )
    }
}

export default ContactTable