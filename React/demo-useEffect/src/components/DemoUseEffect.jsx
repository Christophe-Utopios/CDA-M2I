import { useState, useEffect } from "react"

const DemoUseEffect = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [fullname, setFullname] = useState("")

    const firstnameInputChanged = (e) => {
        setFirstname(e.target.value)  // firstname => a
    }
    
    const lastnameInputChanged = (e) => {
        setLastname(e.target.value)
    }
    
    useEffect(() => {
        setFullname(firstname + " " + lastname) // fullname => 'a' + ' ' + ''
    }, [firstname])


    return (
        <>
            <input type="text" value={firstname} onInput={firstnameInputChanged} />
            <input type="text" value={lastname} onInput={lastnameInputChanged} />
            <p>
                {fullname}
            </p>

        </>
    )
}

export default DemoUseEffect