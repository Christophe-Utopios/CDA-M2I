
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Page APP</h1>
        {/* <Menu></Menu> */}
        <Link to="/form">Page Formulaire</Link>
        {/* <Link to="/formtest">Page Formulaire</Link> */}

    </div>
  );
}

export default App;
