import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAuthMode, signInAction, signUpAction } from "./authSlice"
import { useNavigate } from "react-router-dom"

const SignForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authMode = useSelector(state => state.auth.authMode)
    const emailRef = useRef()
    const passwordRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        const credentials = {
        email,
        password, 
        returnSecureToken: true
        }

        authMode === "Se connecter" ? dispatch(signInAction(credentials)) : dispatch(signUpAction(credentials))
        navigate('/')
    }

  return (
    <>
        <h3>{authMode}</h3>
        <hr />
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email: </label>
                <input type="email" id="email" className="form-control" ref={emailRef}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password: </label>
                <input type="password" id="password" className="form-control" ref={passwordRef} />
            </div>
            <div className="text-end">
                <button className="btn btn-outline-dark">{authMode}</button>
                <button 
                    className="btn btn-primary ms-auto"
                    onClick={() => dispatch(setAuthMode(authMode === "Se connecter" ? "S'inscrire" : "Se connecter"))}>
                        {authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}
                </button>
            </div>
        </form>
    </>
  )
}

export default SignForm