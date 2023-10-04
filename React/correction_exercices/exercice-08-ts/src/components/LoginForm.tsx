import { FormEvent, useRef, MutableRefObject } from 'react'

interface LoginFormProps {
    logInfos: (infos: {username: string, password: string}) => void
}

const LoginForm = (props: LoginFormProps) => {
    const { logInfos } = props

    const usernameInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const passwordInputRef = useRef() as MutableRefObject<HTMLInputElement>

    const submitFormHandler = (event: FormEvent) => {
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