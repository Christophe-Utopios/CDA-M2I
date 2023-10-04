import { useEffect, useState } from 'react'
import classes from './MysteryNumber.module.css'

const MysteryNumber = (props) => {
    /* eslint-disable react/prop-types */
    const { mysteryNumber } = props
    const [numberA, setNumberA] = useState(0)
    const [numberB, setNumberB] = useState(0)
    const [isWon, setIsWon] = useState(false)

    const numberAChangedHandler = (event) => {
        setNumberA(+event.target.value)
    }

    const numberBChangedHandler = (event) => {
        setNumberB(+event.target.value)
    }

    useEffect(() => {
        setIsWon(numberA * numberB === mysteryNumber)
    }, [numberA, numberB, mysteryNumber])

    return (
        <div className={`${classes.mysteryNumberComponent} ${isWon ? classes.isWon : classes.isFailed}`}>
            <input className={classes.inputA} type="number" value={numberA} onInput={numberAChangedHandler} />
            <span className={classes.multiplySign}>x</span>
            <input className={classes.inputB} type="number" value={numberB} onInput={numberBChangedHandler}/>
            <span className={classes.testResult}>{isWon ? '=' : '≠'}</span>
            <span className={classes.mysteryNumber}>{mysteryNumber}</span>
        </div>
    )
}

export default MysteryNumber