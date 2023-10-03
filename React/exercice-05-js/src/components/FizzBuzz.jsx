import { useState } from 'react'
import classes from './FizzBuzz.module.css'

const FizzBuzz = (props) => {
    const [counter, setCounter] = useState(0)

    const minValue = props.minValue ?? 0

    const fizzBuzzFormatted = () => {
        if (counter % 15 === 0 && counter !== 0) {
            return "FizzBuzz"
        } else if (counter % 5 === 0 && counter !== 0) {
            return "Buzz"
        } else if (counter % 3 === 0 && counter !== 0) {
            return "Fizz"
        } else {
            return counter
        }
    }

    return (
        <div className={classes.baseFizzBuzz}>
            <button disabled={counter <= minValue} onClick={() => setCounter(counter - 1)} className={classes.button}>&lt;&lt;</button>
            <span className={classes.resultSpan}>{fizzBuzzFormatted()}</span>
            <button disabled={counter > props.maxValue} onClick={() => setCounter(counter + 1)} className={classes.button}>&gt;&gt;</button>
        </div>
    )
}

export default FizzBuzz