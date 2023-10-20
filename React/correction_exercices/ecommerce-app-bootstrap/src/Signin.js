import { useRef } from "react";
import { useNavigate } from "react-router-dom";



function Signin({ children, ...rest }) {
    const navigate = useNavigate()
    const inputPassword = useRef()

    const connect = () => {
        if (inputPassword.current.value == "password") {
            localStorage.setItem('token', "valide")

        } else {
            localStorage.setItem('token', "invalide")
            console.log("password incorrect")
        }
        navigate("/add-product")

    }

    return (
        <>
            <form onSubmit={connect}>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" ref={inputPassword}/>
                </div>
              
                <button type="submit" className="btn btn-primary">Connexion</button>
            </form>
        </>
    );
}

export default Signin;
