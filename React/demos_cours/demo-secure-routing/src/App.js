import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={"/compte"}>Go to Compte</Link>
      <br></br>
      <Link to={"/compte2"}>Go to Compte 2</Link>
    </div>
  );
}

export default App;
