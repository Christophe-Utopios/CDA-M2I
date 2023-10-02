import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import AlertComponent from "./components/AlertComponent";

function App() {
  return (
    <div className="App">
      <AlertComponent />
      <AlertComponent text='Attention!' />
      <AlertComponent backColor='blue' />
      <AlertComponent backColor='green' text='Tout est bon!' iconClass='bi-check' />
    </div>
  );
}

export default App;
