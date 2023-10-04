import { useRef } from 'react'

const LoginForm = (props) => {
    /* eslint-disable react/prop-types */
    const { logInfos } = props

    const usernameInputRef = useRef()
    const passwordInputRef = useRef()

    const submitFormHandler = (event) => {
        event.preventDefault()

        const username = usernameInputRef.current.value
        const password = passwordInputRef.current.value

        logInfos({
            username,
            password
        })
    }

    return (
        <form action="#" onSubmit={submitFormHandler}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" ref={usernameInputRef}/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" ref={passwordInputRef}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )

}

export default LoginForm