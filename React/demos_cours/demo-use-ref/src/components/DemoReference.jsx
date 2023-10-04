// import { useState } from 'react'
import { useRef } from "react"

const DemoReference = () => {
    // const [username, setUsername] = useState("")
    const usernameInputReference = useRef()

    const getValueFromInput = () => {
        console.log(usernameInputReference.current.value);
    }

    return (
        <>
            <div>
                <label htmlFor="username">Username: </label>
                {/* <input type="text" value={username} onInput={(e) => setUsername(e.target.value)} /> */}
                <input type="text" ref={usernameInputReference} />
            </div>

            <div>
                <button onClick={getValueFromInput}>Get Value</button>
            </div>
        </>
    )
}

export default DemoReference