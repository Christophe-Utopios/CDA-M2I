import classes from './App.module.css'

import BoutonComponent from "./components/BoutonComponent";
import DemoVarInject from "./components/DemoVarInject";

function App() {
  const randomButtonColor = () => {
    if (Math.random() >= 0.5) {
      return "red"
    } 

    return "gray"
  }

  return (
    <div className="App">
      <BoutonComponent textBouton="Bonjour"/> <br />
      <BoutonComponent textBouton="Au revoir"/> <br />
      <BoutonComponent couleurBouton="blue"/> <br />
      <BoutonComponent couleurBouton="green"/> <br />
      <BoutonComponent couleurBouton={randomButtonColor()}/>
      <img src="" alt="" />

      <p className={classes.paragrapheJaune}>
        Ce paragraphe vient de App.jsx
      </p>
      
    </div>
  );
}

export default App;
