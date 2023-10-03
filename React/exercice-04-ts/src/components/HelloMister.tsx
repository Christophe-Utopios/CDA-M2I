import { FormEvent, useState } from "react"

const HelloMister = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    // const addNumberToState = () => {
    //     // Actions
    // }

    const firstnameInputHandler = (event: FormEvent) => {
        setFirstname((event.target as HTMLInputElement).value)
    }

    const lastnameInputHandler = (event: FormEvent) => {
        setLastname((event.target as HTMLInputElement).value)
    }

    const getFullname = () => {
        const formattedFirstname = firstname.substring(0, 1).toUpperCase() + firstname.substring(1).toLowerCase()

        const formattedLastname = lastname.toUpperCase()

        return formattedFirstname + " " + formattedLastname
    }

    const handleNumbers = (nbA: number, nbB: number, callbackFn: (a: number, b:number) => number) => {
        return callbackFn(nbA, nbB)
    }

    const addNumbers = (nbA: number, nbB: number) => {
        return handleNumbers(nbA, nbB, (nbA, nbB) => nbA + nbB)
    }

    const subNumbers = (nbA: number, nbB: number) => {
        return handleNumbers(nbA, nbB, (nbA, nbB) => nbA - nbB)
    }

    return (
        <>
            <div>
                <label htmlFor="firstname">Firstname: </label>
                <input type="text" id="firstname" name="firstname" value={firstname} onInput={firstnameInputHandler} />
            </div>
            <div>
                <label htmlFor="lastname">Lastname: </label>
                <input type="text" id="lastname" name="lastname" value={lastname} onInput={lastnameInputHandler} />
            </div>
            <hr />
            <p>
                Bonjour <b>{getFullname()}</b>, merci d'être sur l'application !
            </p>
        </>
    )
}

export default HelloMister