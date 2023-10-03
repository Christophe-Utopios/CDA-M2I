import { PureComponent, FormEvent } from 'react'

class HelloMisterStateful extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: ""
        }
    }

    firstnameInputHandler (event) {
        this.setState({ firstname: event.target.value })
    }

    lastnameInputHandler (event) {
        this.setState(prevState => ({...prevState, lastname: event.target.value }))
    }

    getFullname () {
        const { firstname, lastname } = this.state

        const formattedFirstname = firstname.substring(0, 1).toUpperCase() + firstname.substring(1).toLowerCase()

        const formattedLastname = lastname.toUpperCase()

        return formattedFirstname + " " + formattedLastname
    }

    render () {
        return (
            <>
                <div>
                    <label htmlFor="firstname">Firstname: </label>
                    <input type="text" id="firstname" name="firstname" value={this.state.firstname} onInput={this.firstnameInputHandler.bind(this)} />
                </div>
                <div>
                    <label htmlFor="lastname">Lastname: </label>
                    <input type="text" id="lastname" name="lastname" value={this.state.lastname} onInput={this.lastnameInputHandler.bind(this)} />
                </div>
                <hr />
                <p>
                    Bonjour <b>{this.getFullname()}</b>, merci d'être sur l'application !
                </p>
            </>
        )
    }
}

export default HelloMisterStateful