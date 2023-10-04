import { FormEvent, useEffect, useState } from 'react'
import classes from './MysteryNumber.module.css'

interface MysteryNumberProps {
    mysteryNumber: number
}

const MysteryNumber = (props: MysteryNumberProps) => {
    const { mysteryNumber } = props
    const [numberA, setNumberA] = useState(0)
    const [numberB, setNumberB] = useState(0)
    const [isWon, setIsWon] = useState(false)

    const numberAChangedHandler = (event: FormEvent) => {
        setNumberA(+(event.target as HTMLInputElement).value)
    }

    const numberBChangedHandler = (event: FormEvent) => {
        setNumberB(+(event.target as HTMLInputElement).value)
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