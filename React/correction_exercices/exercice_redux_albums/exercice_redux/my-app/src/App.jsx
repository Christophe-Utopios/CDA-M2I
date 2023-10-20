import NavBar from "./components/shared/NavBar";
import { Outlet } from "react-router-dom";

function App() {



  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="container">
          <Outlet />
      </main>
    </div>
  );
}

export default App;
