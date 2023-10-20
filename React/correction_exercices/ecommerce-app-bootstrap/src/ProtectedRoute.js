import { Routes, Route, Navigate } from 'react-router-dom';

function isAuthenticated() {
  // Pour l'instant, on met cela sur false pour montrer l'exemple.
  // Dans une vraie application, cela vérifierait l'authentification de l'utilisateur.
  // return false;
  const token = localStorage.getItem('token')
  if (token == "valide") {
    return true
  } else {
    return false
  }
}

function ProtectedRoute({ children, ...rest }) {
  if (isAuthenticated()) {
    return children;
  }

  return <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
