import { useEffect, useState } from "react";

const LoginForm = () => {
    let [maVariable, setMaVariable] = useState("")
    let [monPassword, setMonPassword] = useState("")

    const emailInputHandle = (event) => {
        setMaVariable(event.target.value)
        console.log("Dans emailInputHandler: " + maVariable);
    }

    const passwordInputHandler = (event) => {
        setMonPassword(event.target.value)
        console.log("Dans passwordInputHandler: " + monPassword);
    }

    useEffect(() => {
        console.log("Dans le composant, maVariable: " + maVariable);
        if (maVariable === 'John') {
            console.log("C'est bon, on a écrit 'John'");
        }
    }, [])
    
    useEffect(() => {
        console.log("Dans le composant, monPassword: " + monPassword);
    }, [monPassword])


    return (
        <form action="#">
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={maVariable} onInput={emailInputHandle} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={monPassword} onInput={passwordInputHandler} />
            </div>
        </form>
    )
}

export default LoginForm