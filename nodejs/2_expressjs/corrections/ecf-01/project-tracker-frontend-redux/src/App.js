import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewProject from './components/NewProject';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <Link to="/">Liste de projets</Link>
                  <Link to="/new">Ajouter un projet</Link>
              </nav>
              <Routes>
                  <Route path="/" element={<ProjectList />} />
                  <Route path="/new" element={<NewProject />} />
                  <Route path="/project/:id" element={<ProjectDetails />} />
              </Routes>
          </div>
      </Router>
  );
}
export default App;
