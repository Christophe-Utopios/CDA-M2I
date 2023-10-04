import Person from "../models/Person"

const PersonTable = (props) => {
    const { persons } = props

    if (!persons || persons?.length === 0) {
        return (
            <p>Il n'y a personne dans la base de données</p>
        )
    } else {
        return (
            <div className="container">
                <h1 className="fw-light">My Persons</h1>
                <hr />
                <table className="table table-dark table-striped rounded overflow-hidden align-middle text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((person, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{person.firstname}</td>
                                <td>{person.lastname}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default PersonTable