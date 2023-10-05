import { useRef } from 'react'
import Timer from '../models/Timer'
import classes from './TimerForm.module.css'
import playIcon from '../assets/play_icon.svg'

const TimerForm = (props) => {
    const { onAddTimer } = props

    const houTimeInputRef = useRef()
    const minTimeInputRef = useRef()
    const secTimeInputRef = useRef()
    const timerNameInputRef = useRef()

    const submitFormHandler = (event) => {
        event.preventDefault()

        const hours = +houTimeInputRef.current.value
        const minutes = +minTimeInputRef.current.value
        const seconds = +secTimeInputRef.current.value
        const name = timerNameInputRef.current.value

        if (!!name && (hours >= 0 && hours <= 24) && (minutes >= 0 && minutes <= 60) && (seconds >= 0 && seconds <= 60)) {
            const time = hours * 3600 + minutes * 60 + seconds
    
            onAddTimer(new Timer(time, name))
        }

    }

    return (
        <form onSubmit={submitFormHandler} className={classes.timerForm}>
            <div>
                <h3>Name:</h3>
                <input type="text" defaultValue={'Timer'} ref={timerNameInputRef} />
            </div>
            <div>
                <h3>Time:</h3>
                <div>
                    <input type="number" defaultValue={0} min={0} max={24} ref={houTimeInputRef} />
                    <span>:</span>
                    <input type="number" defaultValue={0} min={0} max={60} ref={minTimeInputRef} />
                    <span>:</span>
                    <input type="number" defaultValue={0} min={0} max={60} ref={secTimeInputRef} />
                </div>
            </div>
            <div>
                <button><img src={playIcon} alt="Play Icon" /></button>
            </div>
        </form>
    )
}

export default TimerForm