import { useState } from "react";

const ChildComponent = (props) => {
    /* eslint-disable react/prop-types */
    const { maProp, maPropB, maFonction, maState, setMaState } = props

    const [inputValue, setInputValue] = useState("")

    const sayHello = () => {
        console.log("Hello world from ChildComponent!");
        maFonction(inputValue)
    }

    return (
        <>
            <h1>Child Component</h1>
            <hr />
            <input type="text" value={inputValue} onInput={(e) => setInputValue(e.target.value)} />
            <button onClick={sayHello}>Click me!</button>
            <input type="text" value={maState} onInput={(e) => setMaState(e.target.value)} />
            <p>maProp : {maProp}</p>
            <p>maPropB : {maPropB}</p>
        </>
    )
}

export default ChildComponent