import { useState } from "react";
import FirstStatefulComponent from "./components/FirstStatefulComponent";
import FirstHookComponent from "./components/FirstHookComponent";

function App() {
  const [compAVisibility, setCompAVisibility] = useState(true)
  const [compBVisibility, setCompBVisibility] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setCompAVisibility(!compAVisibility)}>Toggle FirstStatefulComponent</button>
      <button onClick={() => setCompBVisibility(!compBVisibility)}>Toggle FirstHookComponent</button>
      {compAVisibility && <FirstStatefulComponent />}
      {compBVisibility && <FirstHookComponent />}
    </div>
  );
}

export default App;
