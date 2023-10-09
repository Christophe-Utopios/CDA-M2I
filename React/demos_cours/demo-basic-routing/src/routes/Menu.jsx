import { NavLink, Outlet } from "react-router-dom";



function Menu() {
  return (
    <div >
      <header >
        <h1>Mon Menu</h1>
        <NavLink to="/">Home</NavLink>
        <p>suite </p>
        <NavLink to="/form">Formulaire</NavLink>
      </header>
      <Outlet />
      <p>Mon pied de page</p>
    </div>
  );
}

export default Menu