import { useEffect, useState } from "react"

const DemoUseEffectBis = () => {
    const [inputValue, setInputValue] = useState("")
    const [isInputValid, setIsInputValid] = useState(false)

    const inputChangedHandler = (event) => {
        setInputValue(event.target.value)
    }
    useEffect(() => {
        console.log("RENDER");

        console.log("Mise en attente d'un appel API");

        let timer = setTimeout(() => {
            // Appel API de vérification
            console.log("Appel API résolu");
            setIsInputValid(inputValue === 'John')
        }, 4000)


        return () => {
            console.log("UNMOUNT");

            if (timer) {
                console.log("Annulation du précédent appel API");

                clearTimeout(timer)
                timer = undefined
            }
        }

    }, [inputValue])

    return (
        <>
            <input type="text" value={inputValue} onInput={inputChangedHandler} />
            <hr />
            <p>Mon input est <b>{isInputValid ? 'Valide' : 'Invalide'}</b></p>
        </>


    )
}

export default DemoUseEffectBis