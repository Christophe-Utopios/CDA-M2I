import { Link, NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={`/`}><i className="bi bi-globe"></i> eContacts</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/`}>Accueil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/contacts`}>Contacts</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 bg-dark text-light p-3 rounded">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
