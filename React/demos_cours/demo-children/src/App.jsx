import MyChildrenComponent from "./MyChildrenComponent";
import OtherComponent from "./components/OtherComponent";
import ListingComponent from "./components/ListingComponent";

function App() {
  return (
    <div className="App">
      {/* <MyChildrenComponent />
      <MyChildrenComponent>
        <OtherComponent />
        <p>Ceci est mon paragraphe</p>
      </MyChildrenComponent>

      <MyChildrenComponent backColor='green'>
        <button>Click me!</button>
      </MyChildrenComponent> */}
      <ListingComponent />
    </div>
  );
}

export default App;
