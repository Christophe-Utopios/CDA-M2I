import { logOutAction } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
  
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}><i className="bi bi-globe"></i> eAlbums</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {user ? (
                  <button className="btn btn-secondary ms-auto" onClick={() => dispatch(logOutAction())}>Déconnexion</button>
                ) : (
                  <Link className="btn btn-primary ms-auto" to="/sign">Sign In</Link>
              )}
            </div>
          </div>
        </nav>
     );
}
 
export default NavBar;