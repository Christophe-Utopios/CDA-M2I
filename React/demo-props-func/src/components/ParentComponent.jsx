import { useState } from "react";
import ChildComponent from "./ChildComponent"
import FormComponent from "./FormComponent";

const ParentComponent = () => {
    const [maState, setMaState] = useState("")

    const sayHello = (text) => {
        console.log("Hello " + text + " from ParentComponent!");
        setMaState("")
    }

    const loginHandler = ({username, password}) => {
        console.log("username: " + username);
        console.log("password: " + password);
    }

    const maVariable = "toto"

    return (
        <>
            <h1>Parent Component</h1>
            <hr />
            <p>Dans le parent, maState: {maState}</p>
            <ChildComponent maProp="titi" maPropB={maVariable} maFonction={sayHello} maState={maState} setMaState={setMaState} />
            <hr />
            <FormComponent loginHandler={loginHandler} />
        </>
    )
}

export default ParentComponent